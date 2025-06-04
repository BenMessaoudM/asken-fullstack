import express from 'express';
import Admin from '../models/Admin.js';

const router = express.Router();

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  const admin = await Admin.findOne({ username });
  if (!admin || admin.password !== password) {
    return res.status(401).json({ message: 'Invalid credentials' });
  }

  res.json({ message: 'Login successful' });
});

export default router;
