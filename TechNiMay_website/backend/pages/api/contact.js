import { runMiddleware } from '../../lib/cors';
import nodemailer from 'nodemailer';

// In-memory submission log
const submissions = [];

const TARGET_EMAIL = process.env.NOTIFICATION_EMAIL || 'technimay@gmail.com';
const TARGET_WHATSAPP_NUMBERS = (process.env.WHATSAPP_TO_NUMBERS || '+919545129542,+918329262125').split(',');

/**
 * Send Email Notification via Nodemailer
 */
async function sendEmailNotification(submission) {
  if (!process.env.SMTP_PASS) {
    console.log(`[Email Notice] Form submission logged for ${TARGET_EMAIL}:`, submission);
    return false;
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER || TARGET_EMAIL,
        pass: (process.env.SMTP_PASS || '').replace(/\s+/g, ''),
      },
    });

    const mailOptions = {
      from: `"TechNiMay Website" <${process.env.SMTP_USER || TARGET_EMAIL}>`,
      to: TARGET_EMAIL,
      subject: `🚨 New Lead / Call Request: ${submission.name} - ${submission.service}`,
      text: `
New Form Submission Received on TechNiMay Solutions:

--------------------------------------------------
Name: ${submission.name}
Email: ${submission.email}
Service Required: ${submission.service}
Budget: ${submission.budget || 'Not specified'}
Message / Details: ${submission.message}
Submitted At: ${submission.createdAt}
--------------------------------------------------
      `,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #e0e3e5; border-radius: 8px;">
          <h2 style="color: #1f108e;">⚡ New Lead / Call Request</h2>
          <p>You received a new inquiry on <strong>TechNiMay Solutions</strong> website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 8px; font-weight: bold; width: 140px;">Name:</td><td style="padding: 8px;">${submission.name}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Email:</td><td style="padding: 8px;"><a href="mailto:${submission.email}">${submission.email}</a></td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Service:</td><td style="padding: 8px;">${submission.service}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Budget:</td><td style="padding: 8px;">${submission.budget || 'Not specified'}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Details / Scope:</td><td style="padding: 8px;">${submission.message}</td></tr>
            <tr><td style="padding: 8px; font-weight: bold;">Submitted At:</td><td style="padding: 8px;">${submission.createdAt}</td></tr>
          </table>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('[Email Dispatched Successfully]:', info.messageId);
    return true;
  } catch (error) {
    console.error('[Email Dispatch Error]:', error.message);
    return false;
  }
}

/**
 * Send WhatsApp Notification via Twilio / API
 */
async function sendWhatsAppNotification(submission) {
  const formattedText = `🔔 *New Website Lead on TechNiMay Solutions*:\n\n*Name:* ${submission.name}\n*Email:* ${submission.email}\n*Service:* ${submission.service}\n*Budget:* ${submission.budget || 'N/A'}\n*Message:* ${submission.message}`;

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_WHATSAPP_NUMBER || 'whatsapp:+14155238886';

  if (!accountSid || !authToken) {
    console.log(`[WhatsApp Notice] Configured WhatsApp recipients:`, TARGET_WHATSAPP_NUMBERS);
    console.log(`[WhatsApp Text Body]:\n${formattedText}`);
    return false;
  }

  try {
    const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${accountSid}/Messages.json`;

    for (const rawNum of TARGET_WHATSAPP_NUMBERS) {
      const cleanNum = rawNum.trim().replace(/[^\d+]/g, '');
      const toWhatsApp = cleanNum.startsWith('whatsapp:') ? cleanNum : `whatsapp:${cleanNum}`;

      const params = new URLSearchParams();
      params.append('From', fromNumber);
      params.append('To', toWhatsApp);
      params.append('Body', formattedText);

      await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Authorization': 'Basic ' + Buffer.from(`${accountSid}:${authToken}`).toString('base64'),
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params,
      });
      console.log(`[WhatsApp Message Dispatched] to ${toWhatsApp}`);
    }
    return true;
  } catch (error) {
    console.error('[WhatsApp Dispatch Error]:', error.message);
    return false;
  }
}

export default async function handler(req, res) {
  await runMiddleware(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  const { name, email, service, budget, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: 'Validation error: Name, email, and message are required fields.',
    });
  }

  const submission = {
    id: `sub_${Date.now()}`,
    name,
    email,
    service: service || 'General Inquiry',
    budget: budget || 'Unspecified',
    message,
    createdAt: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
  };

  submissions.push(submission);

  console.log('==================================================');
  console.log('📥 NEW INQUIRY RECEIVED FOR TECHNIMAY SOLUTIONS');
  console.log('==================================================');
  console.log(`Name:        ${submission.name}`);
  console.log(`Email:       ${submission.email}`);
  console.log(`Service:     ${submission.service}`);
  console.log(`Budget:      ${submission.budget}`);
  console.log(`Message:     ${submission.message}`);
  console.log(`Target Mail: ${TARGET_EMAIL}`);
  console.log(`Target Phone: ${TARGET_WHATSAPP_NUMBERS.join(', ')}`);
  console.log('==================================================');

  // Trigger Notifications (await completion before serverless function exits)
  const emailSent = await sendEmailNotification(submission);
  await sendWhatsAppNotification(submission);

  // Generate 1-click WhatsApp web links for instant chat
  const encodedText = encodeURIComponent(
    `Hello! New Website Lead:\nName: ${name}\nEmail: ${email}\nService: ${service}\nBudget: ${budget}\nMessage: ${message}`
  );
  const whatsappChatLinks = TARGET_WHATSAPP_NUMBERS.map((num) => {
    const cleanDigits = num.replace(/[^\d]/g, '');
    return `https://wa.me/${cleanDigits}?text=${encodedText}`;
  });

  return res.status(200).json({
    success: true,
    message: 'Thank you for reaching out! A TechNiMay Solutions specialist will contact you shortly.',
    submissionId: submission.id,
    emailSent,
    whatsappLinks: whatsappChatLinks,
  });
}
