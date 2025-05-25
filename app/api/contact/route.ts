import { Resend } from 'resend';
import { NextResponse } from 'next/server';

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // Validate email
    if (!email || typeof email !== 'string') {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      );
    }

    // Send email notification
    await resend.emails.send({
      from: 'GeoParcela <onboarding@resend.dev>', // You can change this to your verified domain
      to: process.env.NOTIFICATION_EMAIL || 'your-email@example.com', // Where you want to receive notifications
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p>A new user has submitted the contact form:</p>
        <p><strong>Email:</strong> ${email}</p>
        <p>Time: ${new Date().toLocaleString()}</p>
      `,
    });

    return NextResponse.json(
      { message: 'Thank you for your interest! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return NextResponse.json(
      { error: 'Failed to process your request' },
      { status: 500 }
    );
  }
} 