import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
      minLegnth: 3,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    age: {
      type: Number,
      min: 18,
      required: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    hobbies: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Students = mongoose.model("students", UserSchema);

export default Students;
