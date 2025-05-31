import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import bookingRoutes from './api/booking.routes.js';
import contactRoutes from './api/contact.routes.js';
import indexRoutes from './api/index.js'; // ✅ Add this

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', indexRoutes); // ✅ Now /api/ping will return pong from ASK API
app.use('/api/booking', bookingRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.error('MongoDB connection error:', err));
