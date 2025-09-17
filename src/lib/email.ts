/* eslint-disable @typescript-eslint/no-explicit-any */
import { ContactFormData } from './contact/types';
import { Resend } from 'resend';

// Debug version of your sendContactEmail function
export const sendContactEmail = async (formData: ContactFormData) => {
  try {
    console.log("=== RESEND EMAIL DEBUG ===");
    console.log("Form data received:", JSON.stringify(formData, null, 2));
    
    // Check environment variables
    console.log("RESEND_API_KEY exists:", !!process.env.RESEND_API_KEY);
    console.log("FROM_EMAIL:", process.env.FROM_EMAIL || "noreply@yourdomain.com");
    console.log("TO_EMAIL:", process.env.TO_EMAIL || "hkstyles1212@gmail.com");
    
    if (!process.env.RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not set in environment variables");
    }
    
    if (!process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      throw new Error("FROM_EMAIL or TO_EMAIL not set in environment variables");
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const emailData = {
      from: process.env.FROM_EMAIL,
      to: [process.env.TO_EMAIL], // Resend expects an array
      subject: `New Contact Form Submission from ${formData.fullName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Contact Form Submission</title>
        </head>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Name:</strong> ${formData.fullName}</p>
              <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
              <p><strong>Phone:</strong> ${formData.phone || 'Not provided'}</p>
              <p><strong>Interested In:</strong> ${formData.interestedIn || 'Not specified'}</p>
            </div>
            
            ${formData.message ? `
              <div style="margin: 20px 0;">
                <h3 style="color: #2c3e50;">Message:</h3>
                <div style="background-color: #ffffff; padding: 15px; border-left: 4px solid #3498db; margin: 10px 0;">
                  ${formData.message.replace(/\n/g, '<br>')}
                </div>
              </div>
            ` : ''}
            
            <hr style="border: none; border-top: 1px solid #eee; margin: 30px 0;">
            <p style="color: #666; font-size: 12px;">
              This email was sent from your website contact form on ${new Date().toLocaleString()}.
            </p>
          </div>
        </body>
        </html>
      `,
      // Also include text version for better deliverability
      text: `
New Contact Form Submission

Name: ${formData.fullName}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Interested In: ${formData.interestedIn || 'Not specified'}

${formData.message ? `Message:\n${formData.message}` : ''}

---
Sent on ${new Date().toLocaleString()}
      `.trim(),
    };

    console.log("Sending email with Resend...");
    console.log("Email payload:", {
      from: emailData.from,
      to: emailData.to,
      subject: emailData.subject,
      hasHtml: !!emailData.html,
      hasText: !!emailData.text,
    });

    const result = await resend.emails.send(emailData);
    
    console.log("✅ Resend email sent successfully!");
    console.log("Resend response:", JSON.stringify(result, null, 2));
    
    return {
      success: true,
      messageId: result.data?.id,
      provider: 'resend',
      result: result,
    };

  } catch (error: any) {
    console.error("❌ Resend email failed:");
    console.error("Error type:", typeof error);
    console.error("Error message:", error?.message);
    console.error("Error details:", JSON.stringify(error, null, 2));
    
    // Resend-specific error handling
    if (error?.name === 'ResendError') {
      console.error("Resend API Error Details:", error.cause);
    }
    
    throw new Error(`Failed to send email via Resend: ${error?.message || 'Unknown error'}`);
  }
};

// Test function specifically for Resend
export const testResendConfiguration = async () => {
  console.log("=== RESEND CONFIGURATION TEST ===");
  
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("❌ RESEND_API_KEY not found");
      return { success: false, error: "RESEND_API_KEY not set" };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    
    // Test with minimal data
    const testEmail = {
      from: process.env.FROM_EMAIL || 'onboarding@resend.dev',
      to: [process.env.TO_EMAIL || 'test@example.com'],
      subject: 'Resend Configuration Test',
      html: '<p>This is a test email to verify Resend configuration.</p>',
    };

    console.log("Testing with:", {
      from: testEmail.from,
      to: testEmail.to,
      apiKeyLength: process.env.RESEND_API_KEY.length,
    });

    const result = await resend.emails.send(testEmail);
    
    console.log("✅ Resend test successful!");
    console.log("Test result:", result);
    
    return { success: true, result };
    
  } catch (error: any) {
    console.error("❌ Resend test failed:", error);
    return { success: false, error: error?.message };
  }
};

// Alternative simple version for testing
export const sendContactEmailSimple = async (formData: ContactFormData) => {
  const resend = new Resend(process.env.RESEND_API_KEY);
  
  try {
    const { data, error } = await resend.emails.send({
      from: 'Contact Form <onboarding@resend.dev>', // Use Resend's default for testing
      to: [process.env.TO_EMAIL!],
      subject: `Contact from ${formData.fullName}`,
      html: `
        <h2>New Contact</h2>
        <p><strong>Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message || 'No message'}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      throw new Error(`Resend error: ${JSON.stringify(error)}`);
    }

    console.log('Email sent successfully:', data);
    return data;
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
};