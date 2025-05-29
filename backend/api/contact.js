import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, reason, message } = req.body;

  const recipientEmails =
    reason === 'harassment'
      ? ['hello@asken.fi', 'jessica@asken.fi', 'frej@asken.fi']
      : ['info@asken.fi'];

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: recipientEmails,
      subject: `New Contact: ${reason}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Contact Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ message: 'Message sent successfully' });
  } catch (err) {
    console.error('Error sending mail:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
