import express from 'express';

const router = express.Router();

router.get('/ping', (req, res) => {
  res.json({ message: 'pong from ASK API' });
});

export default router;
