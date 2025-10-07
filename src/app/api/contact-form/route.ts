// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend (you can also use Nodemailer or another service)
const resend = new Resend(process.env.RESEND_API_KEY);

// Email configuration
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev';
const TO_EMAIL = process.env.TO_EMAIL || 'your-email@example.com';
const CC_EMAILS = process.env.CC_EMAILS?.split(',') || [];

interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  interestedIn: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

// Validation function
function validateFormData(data: ContactFormData): ValidationError[] {
  const errors: ValidationError[] = [];

  // Full Name validation
  if (!data.fullName || data.fullName.trim().length < 2) {
    errors.push({
      field: 'fullName',
      message: 'Full name must be at least 2 characters long',
    });
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!data.email || !emailRegex.test(data.email)) {
    errors.push({
      field: 'email',
      message: 'Please provide a valid email address',
    });
  }

  // Phone validation (basic)
  const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
  if (!data.phone || !phoneRegex.test(data.phone)) {
    errors.push({
      field: 'phone',
      message: 'Please provide a valid phone number',
    });
  }

  // Interested In validation
  if (!data.interestedIn || data.interestedIn.trim().length === 0) {
    errors.push({
      field: 'interestedIn',
      message: 'Please select a property you are interested in',
    });
  }

  // Message validation (optional but recommended)
  if (data.message && data.message.length > 2000) {
    errors.push({
      field: 'message',
      message: 'Message must be less than 2000 characters',
    });
  }

  return errors;
}

// HTML Email Template
function generateEmailHTML(data: ContactFormData): string {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
          }
          .container {
            background-color: #ffffff;
            border-radius: 8px;
            padding: 30px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 8px 8px 0 0;
            margin: -30px -30px 30px -30px;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
            font-weight: 600;
          }
          .field {
            margin-bottom: 20px;
            padding-bottom: 20px;
            border-bottom: 1px solid #e0e0e0;
          }
          .field:last-child {
            border-bottom: none;
          }
          .label {
            font-weight: 600;
            color: #666;
            font-size: 12px;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            margin-bottom: 5px;
          }
          .value {
            font-size: 16px;
            color: #333;
            word-wrap: break-word;
          }
          .property-badge {
            display: inline-block;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 6px 12px;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
          }
          .message-box {
            background-color: #f9f9f9;
            padding: 15px;
            border-radius: 4px;
            border-left: 4px solid #667eea;
            white-space: pre-wrap;
          }
          .footer {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 2px solid #e0e0e0;
            font-size: 12px;
            color: #999;
            text-align: center;
          }
          .timestamp {
            color: #999;
            font-size: 14px;
            margin-top: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🏢 New Contact Form Submission</h1>
          </div>
          
          <div class="field">
            <div class="label">Full Name</div>
            <div class="value">${data.fullName}</div>
          </div>
          
          <div class="field">
            <div class="label">Email Address</div>
            <div class="value">
              <a href="mailto:${data.email}" style="color: #667eea; text-decoration: none;">
                ${data.email}
              </a>
            </div>
          </div>
          
          <div class="field">
            <div class="label">Phone Number</div>
            <div class="value">
              <a href="tel:${data.phone}" style="color: #667eea; text-decoration: none;">
                ${data.phone}
              </a>
            </div>
          </div>
          
          <div class="field">
            <div class="label">Interested In</div>
            <div class="value">
              <span class="property-badge">${data.interestedIn}</span>
            </div>
          </div>
          
          ${data.message ? `
            <div class="field">
              <div class="label">Message</div>
              <div class="message-box">${data.message}</div>
            </div>
          ` : ''}
          
          <div class="footer">
            <div class="timestamp">
              Submitted on ${new Date().toLocaleString('en-US', { 
                dateStyle: 'full', 
                timeStyle: 'long' 
              })}
            </div>
            <p style="margin-top: 15px;">
              This email was sent from your website contact form.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Plain text version
function generateEmailText(data: ContactFormData): string {
  return `
New Contact Form Submission

Full Name: ${data.fullName}
Email: ${data.email}
Phone: ${data.phone}
Interested In: ${data.interestedIn}

${data.message ? `Message:\n${data.message}` : 'No message provided'}

---
Submitted on ${new Date().toLocaleString()}
  `.trim();
}

// POST handler
export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body: ContactFormData = await request.json();

    // Validate form data
    const validationErrors = validateFormData(body);
    if (validationErrors.length > 0) {
      return NextResponse.json(
        {
          success: false,
          message: 'Validation failed',
          errors: validationErrors,
        },
        { status: 400 }
      );
    }

    // Check if Resend API key is configured
    if (!process.env.RESEND_API_KEY) {
      console.error('RESEND_API_KEY is not configured');
      return NextResponse.json(
        {
          success: false,
          message: 'Email service is not configured. Please contact support.',
        },
        { status: 500 }
      );
    }

    // Send email using Resend
    try {
      const emailData = await resend.emails.send({
        from: FROM_EMAIL,
        to: TO_EMAIL,
        cc: CC_EMAILS.length > 0 ? CC_EMAILS : undefined,
        replyTo: body.email,
        subject: `New Inquiry: ${body.interestedIn} - ${body.fullName}`,
        html: generateEmailHTML(body),
        text: generateEmailText(body),
      });

      console.log('Email sent successfully:', emailData);

      // Optional: Add to newsletter/CRM
      // You can integrate with services like Mailchimp, ConvertKit, etc.
      const subscriberAdded = false;
      
      // Example: Add to newsletter (implement your logic)
      // try {
      //   await addToNewsletter(body.email, body.fullName);
      //   subscriberAdded = true;
      // } catch (error) {
      //   console.error('Failed to add subscriber:', error);
      // }

      return NextResponse.json(
        {
          success: true,
          message: 'Thank you for your inquiry! We will contact you soon.',
          emailSent: true,
          subscriberAdded,
        },
        { status: 200 }
      );
    } catch (emailError) {
      console.error('Error sending email:', emailError);
      
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send email. Please try again or contact us directly.',
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Unexpected error in contact form:', error);
    
    return NextResponse.json(
      {
        success: false,
        message: 'An unexpected error occurred. Please try again later.',
      },
      { status: 500 }
    );
  }
}

// Optional: GET handler for health check
export async function GET() {
  return NextResponse.json(
    {
      status: 'ok',
      message: 'Contact form API is running',
      timestamp: new Date().toISOString(),
    },
    { status: 200 }
  );
}