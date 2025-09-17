import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '@/lib/email';
import { addToMailerLite } from '@/lib/mailerlite';
import { ApiResponse, contactFormSchema } from '@/lib/contact/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Validate the form data
    const validatedData = contactFormSchema.parse(body);

    // Send emails
    const emailResults = await sendContactEmail(validatedData);
    
    // Add to MailerLite (optional - don't fail if this fails)
    let mailerLiteResult;
    try {
      mailerLiteResult = await addToMailerLite(validatedData);
    } catch (error) {
      console.warn('MailerLite subscription failed, but continuing:', error);
    }

    return NextResponse.json<ApiResponse>({
      success: true,
      message: 'Your message has been sent successfully!',
      data: {
        emailResults,
        mailerLiteResult,
      },
    });

  } catch (error) {
    console.error('Contact form API error:', error);
    
    if (error instanceof Error) {
      return NextResponse.json<ApiResponse>(
        {
          success: false,
          message: 'Failed to process your request',
          error: error.message,
        },
        { status: 400 }
      );
    }

    return NextResponse.json<ApiResponse>(
      {
        success: false,
        message: 'An unexpected error occurred',
      },
      { status: 500 }
    );
  }
}
