import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req) {
  try {
    const data = await req.json();
    const {
      name,
      phone,
      email,
      industry,
      budget,
      timeline,
      stage,
      description,
    } = data;

    // Validate required fields (Name and Phone/WhatsApp are mandatory)
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone / WhatsApp number are required.' },
        { status: 400 }
      );
    }

    const recipientEmail = process.env.EMAIL_TO || 'help@banegabrand.com';
    const timestamp = new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' });

    // Store lead locally in data/leads.json as a backup so no lead is ever lost
    try {
      const dataDir = path.join(process.cwd(), 'data');
      if (!fs.existsSync(dataDir)) {
        fs.mkdirSync(dataDir, { recursive: true });
      }
      const leadsFile = path.join(dataDir, 'leads.json');
      let leads = [];
      if (fs.existsSync(leadsFile)) {
        try {
          const content = fs.readFileSync(leadsFile, 'utf8');
          leads = JSON.parse(content) || [];
        } catch {
          leads = [];
        }
      }
      leads.unshift({
        id: Date.now(),
        timestamp,
        ...data,
      });
      fs.writeFileSync(leadsFile, JSON.stringify(leads, null, 2));
    } catch (saveError) {
      console.warn('[Contact API] Could not save lead backup locally:', saveError);
    }

    // Configure Hostinger SMTP transporter
    const user = process.env.EMAIL_USER || 'help@banegabrand.com';
    const pass = process.env.EMAIL_PASS;
    const host = process.env.EMAIL_HOST || 'smtp.hostinger.com';
    const port = Number(process.env.EMAIL_PORT) || 465;

    // Clean phone number for WhatsApp link
    const cleanPhone = phone.replace(/[^0-9]/g, '');

    // HTML Email Template for help@banegabrand.com
    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
        <meta charset="utf-8">
        <style>
          body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f7; margin: 0; padding: 24px; color: #1e293b; }
          .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.08); border: 1px solid #e2e8f0; }
          .header { background: #0B1B36; padding: 32px 28px; text-align: center; }
          .header h1 { color: #ffffff; margin: 0 0 6px; font-size: 24px; font-weight: 800; letter-spacing: -0.5px; }
          .header p { color: #FF4D00; margin: 0; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; }
          .content { padding: 32px 28px; }
          .badge { display: inline-block; background: #FFF5E6; color: #FF4D00; font-weight: 700; font-size: 12px; padding: 5px 12px; border-radius: 20px; margin-bottom: 20px; }
          table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
          td { padding: 12px 14px; border-bottom: 1px solid #f1f5f9; font-size: 14px; vertical-align: top; }
          td.label { width: 38%; color: #64748b; font-weight: 600; background: #f8fafc; }
          td.value { color: #0f172a; font-weight: 700; }
          .whatsapp-btn { display: inline-block; background: #25D366; color: #ffffff; text-decoration: none; padding: 6px 14px; border-radius: 8px; font-size: 12px; font-weight: bold; margin-left: 8px; }
          .desc-box { background: #f8fafc; border-left: 4px solid #FF4D00; padding: 16px 18px; border-radius: 8px; margin-top: 10px; font-size: 14px; line-height: 1.6; color: #334155; }
          .footer { background: #f8fafc; padding: 20px 28px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e2e8f0; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Banega Brand</h1>
            <p>New Inbound Client Inquiry</p>
          </div>
          <div class="content">
            <span class="badge">Received: ${timestamp} IST</span>
            <table>
              <tr>
                <td class="label">Full Name</td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label">Phone / WhatsApp</td>
                <td class="value">
                  <a href="tel:${phone}" style="color: #FF4D00; text-decoration: none;">${phone}</a>
                  ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}" target="_blank" class="whatsapp-btn">Chat on WhatsApp</a>` : ''}
                </td>
              </tr>
              ${email ? `
              <tr>
                <td class="label">Email Address</td>
                <td class="value"><a href="mailto:${email}" style="color: #FF4D00; text-decoration: none;">${email}</a></td>
              </tr>` : ''}
              <tr>
                <td class="label">Category / Industry</td>
                <td class="value">${industry || 'Not Specified'}</td>
              </tr>
              ${budget ? `
              <tr>
                <td class="label">Budget Segment</td>
                <td class="value" style="color: #059669;">${budget}</td>
              </tr>` : ''}
              ${timeline ? `
              <tr>
                <td class="label">Launch Timeline</td>
                <td class="value">${timeline}</td>
              </tr>` : ''}
              ${stage ? `
              <tr>
                <td class="label">Current Stage</td>
                <td class="value">${stage}</td>
              </tr>` : ''}
            </table>

            <h3 style="font-size: 15px; margin: 20px 0 8px; color: #0B1B36;">Idea Details / Requirements:</h3>
            <div class="desc-box">
              ${description ? description.replace(/\n/g, '<br/>') : 'No additional description provided.'}
            </div>
          </div>
          <div class="footer">
            Sent automatically from BanegaBrand.com Website &bull; Destination: ${recipientEmail}
          </div>
        </div>
      </body>
      </html>
    `;

    // Attempt sending through Nodemailer if credentials are provided
    if (user && pass) {
      try {
        const transporter = nodemailer.createTransport({
          host,
          port,
          secure: port === 465,
          auth: { user, pass },
          tls: {
            rejectUnauthorized: false
          }
        });

        await transporter.sendMail({
          from: `"Banega Brand Website" <${user}>`,
          to: recipientEmail,
          replyTo: email || user,
          subject: `🚀 New Idea Inquiry: ${name} (${industry || 'Brand'}) - ${phone}`,
          html: htmlContent,
          text: `
New Brand Idea from BanegaBrand.com:
----------------------------------------
Name: ${name}
Phone: ${phone}
Email: ${email || 'Not provided'}
Category: ${industry || 'Not specified'}
Idea / Description:
${description || 'No description provided'}
Time: ${timestamp}
          `,
        });
        console.log(`[Contact API] Email successfully delivered to Hostinger mailbox: ${recipientEmail}`);

        // If visitor provided email, send auto-reply
        if (email) {
          try {
            await transporter.sendMail({
              from: `"Banega Brand" <${user}>`,
              to: email,
              subject: 'We received your idea — Banega Brand',
              text: `Hello ${name},

Thank you for reaching out to Banega Brand! We have received your idea inquiry.

Our team will review your requirements and reach out to you within 24 hours.

Best regards,
The Banega Brand Team
https://banegabrand.com`
            });
            console.log('[Contact API] Auto-reply successfully delivered to ' + email);
          } catch (autoErr) {
            console.warn('[Contact API] Auto-reply error:', autoErr.message);
          }
        }

      } catch (mailError) {
        console.warn('[Contact API] Hostinger SMTP error (check credentials):', mailError.message);
      }
    } else {
      console.log(`[Contact API] Mock email sent (configure Hostinger EMAIL_USER and EMAIL_PASS in .env.local to send live emails to ${recipientEmail})`);
      console.log('Lead Details:', { name, phone, email, industry, description, timestamp });
    }

    return NextResponse.json({
      success: true,
      message: 'Inquiry received successfully! Our team will contact you within 24 hours.',
      data: { name, phone, timestamp },
    });
  } catch (err) {
    console.error('[Contact API] Server error:', err);
    return NextResponse.json(
      { error: 'An unexpected error occurred. Please try again or WhatsApp us directly.' },
      { status: 500 }
    );
  }
}
