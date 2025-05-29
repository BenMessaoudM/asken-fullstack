import express from 'express';
const router = express.Router();

router.get('/ping', (req, res) => {
  res.send('Membership API is alive');
});

export default router;
