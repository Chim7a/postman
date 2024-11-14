async function registerUser(req, res) {
  console.log(req.body.firstName);

  res.status(201).json({ message: "User registered successfully" });
}

export default registerUser;
