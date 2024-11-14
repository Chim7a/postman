async function getInfo(req, res) {
  console.log(req.query);

  const user = {
    name: "Chima Paul",
    age: 30,
    city: "London",
  };
  res.status(200).json(user);
}

export default getInfo;
