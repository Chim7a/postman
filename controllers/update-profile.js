import validator from "validator";
import Students from "../models/userModel.js";

async function updateProfile(req, res) {
  const { userId } = req.params;
  const { firstName, lastName, age, city, hobbies, email } = req.body;

  // Check if userId is provided
  if (!userId || validator.isEmpty(userId, { ignore_whitespace: true })) {
    return res.status(400).json({ message: "Please provide user id" });
  }

  // Check for first name provided
  if (!firstName || firstName.trim().length < 3) {
    return res
      .status(400)
      .json({ message: "Please provide a valid first name." });
  }

  // Check for last name provided
  if (!lastName || lastName.trim().length < 3) {
    return res
      .status(400)
      .json({ message: "Please provide a valid last name." });
  }

  // Check for age less than 18
  if (!age || age < 18) {
    return res.status(400).json({ message: "Must be older than 18" });
  }

  // Check for city name.
  if (!city || city.trim().length < 2) {
    return res.status(400).json({ message: "Please provide a valid city." });
  }

  // Only validate hobbies value if the user added hobbies along with the request.
  if (hobbies && hobbies.length === 0) {
    return res.status(400).json({ message: "Please provide valid Email." });
  }

  // Check for email provided
  if (!email || validator.isEmail(email) === false) {
    return res.status(400).json({ message: "Please provide valid Email." });
  }

  // check if an account with a specific id exist
  const studentAccountExist = await Students.findById(userId);
  if (studentAccountExist === null) {
    return res
      .status(400)
      .json({ message: `An account with id ${userId} does not exist.` });
  }

  //
  try {
    const studentProfileUpdate = await Students.findByIdAndUpdate(userId, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      hobbies: hobbies,
      age: age,
    });
    console.log(studentProfileUpdate);
    res.status(201).json({ message: "account updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Sorry an error occured" });
  }
}

export default updateProfile;
