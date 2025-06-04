import express from "express";
import Booking from "../models/Booking.js";

const router = express.Router();

// Create a booking
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

// Get all bookings (for admin)
router.get("/", async (req, res) => {
  try {
    const allBookings = await Booking.find().sort({ date: -1 });
    res.json(allBookings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch bookings" });
  }
});

// DELETE /api/booking/:id
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: "Booking deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete booking" });
  }
});


export default router;
