import validator from "validator";
import Students from "../models/userModel.js";

async function deleteAccount(req, res) {
  const { email } = req.query;
  // Check for email provided
  if (!email || !validator.isEmail(email)) {
    return res.status(400).json({ message: "Please provide valid Email." });
  }
  try {
    const studentToBeDeleted = await Students.deleteOne({ email: email });
    console.log(studentToBeDeleted);
    res.status(200).json({ message: "User account Deleted successfully" });
  } catch (error) {
    console.log(error);
    res.status(501).json({ message: "Server error occured" });
  }
}

export default deleteAccount;
