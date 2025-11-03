// app/api/contact-form/route.ts
/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Validation schema
const ContactFormSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters').max(20),
  interestedIn: z.string().min(1, 'Please select a property'),
  message: z.string().max(1000, 'Message too long').optional(),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

// Rate limiting (simple in-memory, use Redis in production)
const rateLimit = new Map<string, { count: number; resetTime: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const limit = rateLimit.get(ip);

  if (!limit || now > limit.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + 60000 }); // 1 minute window
    return true;
  }

  if (limit.count >= 5) {
    return false; // Max 5 requests per minute
  }

  limit.count++;
  return true;
}

// MailerLite API Integration
async function addToMailerLite(data: ContactFormData) {
  const MAILERLITE_API_KEY = process.env.MAILERLITE_API_KEY;
  const MAILERLITE_GROUP_ID = process.env.MAILERLITE_GROUP_ID; // Optional: specific group

  if (!MAILERLITE_API_KEY) {
    console.error('MailerLite API key not configured');
    return { success: false, error: 'Configuration error' };
  }

  try {
    const response = await fetch('https://connect.mailerlite.com/api/subscribers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${MAILERLITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: data.email,
        fields: {
          name: data.fullName,
          phone: data.phone,
          interested_in: data.interestedIn,
          message: data.message || '',
          last_name: data.fullName.split(' ').slice(1).join(' ') || '',
        },
        groups: MAILERLITE_GROUP_ID ? [MAILERLITE_GROUP_ID] : [],
        status: 'active',
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('MailerLite API error:', result);
      return { success: false, error: result.message || 'Failed to add subscriber' };
    }

    return { success: true, data: result };
  } catch (error) {
    console.error('MailerLite error:', error);
    return { success: false, error: 'Failed to connect to MailerLite' };
  }
}

// Resend Email Integration
async function sendEmailWithResend(data: ContactFormData) {
  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const TO_EMAIL = process.env.ADMIN_EMAIL || 'info@j7group.com.pk';

  if (!RESEND_API_KEY) {
    console.error('Resend API key not configured');
    return { success: false, error: 'Configuration error' };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'J7 Group <noreply@j7group.com.pk>', // Must be verified domain
        to: [TO_EMAIL],
        reply_to: data.email,
        subject: `New Contact Form: ${data.interestedIn} - ${data.fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #51301F;">New Contact Form Submission</h2>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #51301F;">Contact Details</h3>
              <p><strong>Name:</strong> ${data.fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${data.email}">${data.email}</a></p>
              <p><strong>Phone:</strong> <a href="tel:${data.phone}">${data.phone}</a></p>
              <p><strong>Interested In:</strong> ${data.interestedIn}</p>
            </div>
            
            ${data.message ? `
              <div style="background: #fff; padding: 20px; border-left: 4px solid #51301F; margin: 20px 0;">
                <h3 style="margin-top: 0; color: #51301F;">Message</h3>
                <p style="white-space: pre-wrap;">${data.message}</p>
              </div>
            ` : ''}
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
              <p>This email was sent from the J7 Group contact form.</p>
              <p>Submitted at: ${new Date().toLocaleString('en-PK', { timeZone: 'Asia/Karachi' })}</p>
            </div>
          </div>
        `,
      }),
    });

    const result = await response.json();

    if (!response.ok) {
      console.error('Resend API error:', result);
      return { success: false, error: result.message || 'Failed to send email' };
    }

    // Send confirmation email to customer
    await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'J7 Group <noreply@j7group.com.pk>',
        to: [data.email],
        subject: `Thank you for your interest in ${data.interestedIn}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #51301F;">Thank You for Contacting J7 Group</h2>
            
            <p>Dear ${data.fullName},</p>
            
            <p>Thank you for your interest in <strong>${data.interestedIn}</strong>. We have received your inquiry and our team will get back to you within 24 hours.</p>
            
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #51301F;">Your Submission Details</h3>
              <p><strong>Property of Interest:</strong> ${data.interestedIn}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
            </div>
            
            <p>In the meantime, you can:</p>
            <ul>
              <li>Visit our website: <a href="https://j7group.com.pk">j7group.com</a></li>
              <li>Call us: +92-XX-XXXXXXX</li>
              <li>WhatsApp us for instant updates</li>
            </ul>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
              <p style="color: #666; font-size: 12px;">
                J7 Group - Building Pakistan's Future<br>
                Islamabad, Pakistan
              </p>
            </div>
          </div>
        `,
      }),
    });

    return { success: true, data: result };
  } catch (error) {
    console.error('Resend error:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

// Main POST handler
export async function POST(request: NextRequest) {
  try {
    // Get client IP for rate limiting
    const ip = request.headers.get('x-forwarded-for') || 
               request.headers.get('x-real-ip') || 
               'unknown';

    // Check rate limit
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    // Parse and validate request body
    const body = await request.json();
    const validatedData = ContactFormSchema.parse(body);

    // Process in parallel for better performance
    const [mailerLiteResult, resendResult] = await Promise.allSettled([
      addToMailerLite(validatedData),
      sendEmailWithResend(validatedData),
    ]);

    // Check if both operations succeeded
    const mailerLiteSuccess = mailerLiteResult.status === 'fulfilled' && mailerLiteResult.value.success;
    const resendSuccess = resendResult.status === 'fulfilled' && resendResult.value.success;

    // Log any failures (but don't fail the request)
    if (!mailerLiteSuccess) {
      console.error('MailerLite failed:', 
        mailerLiteResult.status === 'fulfilled' ? mailerLiteResult.value.error : mailerLiteResult.reason
      );
    }

    if (!resendSuccess) {
      console.error('Resend failed:', 
        resendResult.status === 'fulfilled' ? resendResult.value.error : resendResult.reason
      );
    }

    // Return success if at least one service worked
    if (mailerLiteSuccess || resendSuccess) {
      return NextResponse.json(
        { 
          success: true, 
          message: 'Thank you! We will contact you soon.',
          services: {
            mailerlite: mailerLiteSuccess,
            email: resendSuccess,
          }
        },
        { status: 200 }
      );
    }

    // Both services failed
    return NextResponse.json(
      { error: 'Failed to process your request. Please try again or contact us directly.' },
      { status: 500 }
    );

  } catch (error) {
    // Validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { error: 'Validation failed', details: error.issues },
        { status: 400 }
      );
    }

    // Generic error
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again.' },
      { status: 500 }
    );
  }
}

// Optional: GET handler for testing
export async function GET() {
  return NextResponse.json(
    { message: 'Contact API is running', status: 'ok' },
    { status: 200 }
  );
}

// lib/mailerlite.ts - Optional: Separate MailerLite client
export class MailerLiteClient {
  private apiKey: string;
  private baseURL = 'https://connect.mailerlite.com/api';

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  async createOrUpdateSubscriber(data: {
    email: string;
    name: string;
    phone: string;
    fields?: Record<string, any>;
    groups?: string[];
  }) {
    const response = await fetch(`${this.baseURL}/subscribers`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${this.apiKey}`,
      },
      body: JSON.stringify({
        email: data.email,
        fields: {
          name: data.name,
          phone: data.phone,
          ...data.fields,
        },
        groups: data.groups || [],
        status: 'active',
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || 'Failed to add subscriber');
    }

    return response.json();
  }

  async addToGroup(subscriberId: string, groupId: string) {
    const response = await fetch(
      `${this.baseURL}/subscribers/${subscriberId}/groups/${groupId}`,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      }
    );

    if (!response.ok) {
      throw new Error('Failed to add subscriber to group');
    }

    return response.json();
  }
}