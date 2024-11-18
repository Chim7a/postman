import validator from "validator";
import Students from "../models/userModel.js";

async function updateEmail(req, res) {
  const { userId } = req.params;
  const { email } = req.body;

  // Check if userId is provided
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  // Check if Email is valid
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Please provide valid email" });
  }

  try {
    const updateStudentRecord = await Students.findByIdAndUpdate(
      userId,
      {
        email: email,
      },
      {
        new: true,
      }
    );

    console.log(updateStudentRecord);
    return res.status(201).json({ message: "Email updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry an error occured" });
  }

  res.status(200).json({ message: "email updated successfully" });
}

export default updateEmail;
