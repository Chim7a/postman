import validator from "validator";
import Students from "../models/userModel.js";

async function getInfo(req, res) {
  // req.query and param are used to recieve data from the GET method
  const { email } = req.query;

  // Check for valid email.
  if (!email || !validator.isEmail(email)) {
    return res.status(200).json({ message: "Please provide a valid email" });
  }

  // Check our database for users with this email
  const user = await Students.findOne({ email: email });

  // Check if student was found
  if (user === null) {
    return res
      .status(400)
      .json({ message: `No record found with this email ${email}` });
  }

  res.status(200).json({ message: "Success", studentRecord: user });
}

export default getInfo;
