import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const sendContactEmail = async (req, res) => {
  const { name, email, reason, message } = req.body;

  if (!name || !email || !reason || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  let recipients =
    reason === 'anti-harassment'
      ? ['hello@asken.fi', 'jessica@asken.fi', 'frej@asken.fi']
      : ['info@asken.fi'];

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS
    }
  });

  const mailOptions = {
    from: `"ASK Contact Form" <${process.env.MAIL_USER}>`,
    to: recipients.join(','),
    subject: `New Contact Form Message from ${name}`,
    text: `From: ${name} <${email}>\n\nReason: ${reason}\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true });
  } catch (err) {
    console.error('Email sending failed:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};

export default sendContactEmail;
