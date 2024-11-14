import validator from "validator";
import Students from "../models/userModel.js";

async function registerUser(req, res) {
  const { firstName, lastName, age, city, hobbies, email } = req.body;

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

  // check if there is a duplicate account
  const studentAlreadyExist = await Students.findOne({ email: email });
  if (studentAlreadyExist !== null) {
    return res
      .status(400)
      .json({ message: `An account already exist ${email} already exist.` });
  }
  try {
    // create a recored
    const studentCreated = await Students.create({
      firstName: firstName,
      lastName: lastName,
      email: email,
      age: age,
      hobbies: hobbies,
      city: city,
    });

    console.log(studentCreated);
    res.status(201).json({ message: "Student registered successfully." });
  } catch (error) {
    // return an error if any
    console.log(error);

    res.status(201).json({ message: "Sorry an error occurred." });
  }
}

export default registerUser;
