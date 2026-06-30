import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve directory names for ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173']
}));
app.use(express.json());

// Main contact form handler
app.post('/api/contact', async (req, res) => {
  const { fullName, phone, email, cityArea, service, budget, date, message } = req.body;

  console.log('Received contact submission:', req.body);

  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Full Name and Phone Number are required.' });
  }

  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;
  const recipient = process.env.RECIPIENT_EMAIL || 'sbinteriorschirra@gmail.com';

  const emailContent = `
    <h3>New Inquiry Received from Sri Balaji Interiors Website</h3>
    <table border="1" cellpadding="8" style="border-collapse: collapse; border-color: #FAF7F2; font-family: Arial, sans-serif;">
      <tr style="background-color: #FAF7F2;"><td style="width: 150px;"><strong>Field</strong></td><td><strong>Detail</strong></td></tr>
      <tr><td><strong>Full Name</strong></td><td>${fullName}</td></tr>
      <tr><td><strong>Phone Number</strong></td><td>${phone}</td></tr>
      <tr><td><strong>Email</strong></td><td>${email || 'Not provided'}</td></tr>
      <tr><td><strong>City / Area</strong></td><td>${cityArea || 'Not provided'}</td></tr>
      <tr><td><strong>Service</strong></td><td>${service}</td></tr>
      <tr><td><strong>Budget</strong></td><td>${budget}</td></tr>
      <tr><td><strong>Consultation Date</strong></td><td>${date}</td></tr>
      <tr><td><strong>Message</strong></td><td>${message || 'No message provided'}</td></tr>
    </table>
  `;

  // Fallback if SMTP is not configured
  if (!emailUser || !emailPass || emailUser.includes('XXXXXXXXXX') || emailPass.includes('XXXXXXXXXX')) {
    console.log('--- EMAIL SMTP NOT CONFIGURED IN SERVER/.ENV ---');
    console.log(`Mocking send to: ${recipient}`);
    console.log('Details:', req.body);
    console.log('------------------------------------------------');

    return res.status(200).json({
      success: true,
      message: 'SMTP credentials not configured. Form details logged successfully.'
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: emailUser,
        pass: emailPass
      }
    });

    const mailOptions = {
      from: emailUser,
      to: recipient,
      subject: `New Design Consultation Inquiry: ${fullName} - ${service}`,
      html: emailContent
    };

    await transporter.sendMail(mailOptions);
    console.log('Nodemailer sent inquiry email successfully.');
    res.status(200).json({ success: true, message: 'Inquiry email sent successfully.' });
  } catch (error) {
    console.error('Nodemailer SMTP Error:', error);
    res.status(500).json({ error: 'Failed to dispatch email notification.' });
  }
});

app.listen(PORT, () => {
  console.log(`Express backend server listening on port ${PORT}`);
});
