const express = require("express");
const { register, login, logOut, getProfile, editProfile, getSuggestedUsers, followOrUnfollow } = require("../controllers/user.controller");
const isAuthenticated = require("../middlewares/isAuthenticated");
const upload = require("../middlewares/multer");

const router = express.Router();


router.post("/register", register)
router.post("/login", login)
router.get("/logout", logOut);
router.get("/:id/profile", isAuthenticated, getProfile)
router.post("/profile/edit", isAuthenticated, upload.single("profilePicture"), editProfile);
router.get("/suggested", isAuthenticated, getSuggestedUsers);
router.post("/followorunfollow/:id", isAuthenticated, followOrUnfollow);


module.exports = router;