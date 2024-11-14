async function post(req, res) {
  console.log(req.params);
  res.status(200).json({ post: "Today is an amazing day" });
}

export default post;
