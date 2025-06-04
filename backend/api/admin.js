import express from 'express';
const router = express.Router();

// hardcode login (temp)
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'asken123') {
    res.status(200).json({ success: true });
  } else {
    res.status(401).json({ success: false, message: 'Invalid credentials' });
  }
});

export default router;