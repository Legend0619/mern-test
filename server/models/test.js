import mongoose from "mongoose";
// Test Schema
const testSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  image: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  answers: [
    {
      type: String,
      required: true,
    },
  ],
  right: {
    type: Number,
    required: true,
  },
});

export default mongoose.model("Test", testSchema);
