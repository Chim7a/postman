import express from "express";
import registerUser from "../controllers/register-user.js";
import updateProfile from "../controllers/update-profile.js";
import updateEmail from "../controllers/update-email.js";
import getInfo from "../controllers/get-info.js";
import deleteAccount from "../controllers/delete-account.js";
import post from "../controllers/post.js";
const router = express.Router();

router.post("/register", registerUser);
router.put("/update-profile", updateProfile);
router.patch("/update-email", updateEmail);
router.get("/get-info", getInfo);
router.delete("/delete-account", deleteAccount);
router.get("/post/:postId", post);
export default router;
