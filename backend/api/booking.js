import express from 'express';
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Booking API is alive');
});

export default router;
