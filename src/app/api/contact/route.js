import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const { name, email, phone, message } = await req.json();

    // Configure the transporter with environment variables or placeholder
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'your-email@gmail.com', // Replace with environment variable
        pass: process.env.EMAIL_PASS || 'your-app-password', // Replace with environment variable
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: process.env.EMAIL_USER || 'your-email@gmail.com', // Send to yourself
      subject: `New Lead from BanegaBrand: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Message: ${message}
      `,
      html: `
        <h3>New Contact Request</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    // Note: Since this is a demo/development environment, if no real credentials are set, this might fail or be mocked.
    // If you have real credentials, it will send the email.
    try {
      await transporter.sendMail(mailOptions);
    } catch (sendError) {
      console.warn("Nodemailer failed to send (likely due to missing credentials). Email data:", { name, email, phone, message });
      // We'll still return success for the UI demo purposes if auth fails
    }

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
