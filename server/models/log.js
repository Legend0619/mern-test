import mongoose from "mongoose";
// Log Schema
const logSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
  result: {
    type: Boolean,
    required: true,
  },
});

export default mongoose.model("Log", logSchema);
