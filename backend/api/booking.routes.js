import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, date, startTime, endTime, sauna, message } = req.body;

  if (!name || !email || !phone || !date || !startTime || !endTime || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    const newBooking = new Booking({ name, email, phone, date, startTime, endTime, sauna, message });
    await newBooking.save();
    res.status(200).json({ message: "Booking saved successfully." });
  } catch (error) {
    console.error("Error saving booking:", error);
    res.status(500).json({ error: "Server error." });
  }
});

export default router;
