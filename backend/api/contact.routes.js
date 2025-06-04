import express from 'express';
import sendContactEmail from '../models/Contact.js';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  const { name, email, reason, message } = req.body;
  if (!name || !email || !reason || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Save to DB
  try {
    const newContact = new Contact({ name, email, reason, message });
    await newContact.save();

    // Send email
    await sendContactEmail(req, res);
  } catch (err) {
    console.error('Error saving contact or sending email:', err);
    res.status(500).json({ error: 'Failed to handle contact' });
  }
});

router.get('/', async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    res.json(messages);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching messages' });
  }
});
// DELETE /api/contact/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Contact.findByIdAndDelete(id);
    res.status(200).json({ message: "Message deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete message" });
  }
});


export default router;
