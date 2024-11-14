async function deleteAccount(req, res) {
  res.status(200).json({ message: "Deleted successfully" });
}

export default deleteAccount;
