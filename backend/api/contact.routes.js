// routes/contact.routes.js
import express from 'express';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();
const router = express.Router();

router.post('/contact', async (req, res) => {
  const { name, reason, message } = req.body;

  // Set recipients based on reason
  let to;
  if (reason === 'general') {
    to = 'info@asken.fi';
  } else if (reason === 'harassment') {
    to = ['hello@asken.fi', 'jessica@asken.fi', 'frej@asken.fi'];
  } else {
    return res.status(400).json({ error: 'Invalid reason selected.' });
  }

  // Mail configuration
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER,
    to,
    subject: `New message from ${name}`,
    text: `Reason: ${reason}\n\nMessage:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Message sent successfully.' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message.', details: err.message });
  }
});

export default router;
