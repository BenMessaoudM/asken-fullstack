import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  date: { type: String, required: true },
  startTime: { type: String, required: true },
  endTime: { type: String, required: true },
  sauna: { type: Boolean, default: false },
  message: { type: String, required: true },
}, {
  timestamps: true,
});

export default mongoose.model("Booking", BookingSchema);
