const express = require("express");
const {
  addNewPost,
  getAllpost,
  getUserPost,
  likePost,
  dislikePost,
  addComment,
  getCommentOfPost,
  deletePost,
  bookmarkPost,
} = require("../controllers/post.controller");
const upload = require("../middlewares/multer");
const isAuthenticated = require("../middlewares/isAuthenticated");

const router = express.Router();

router.post("/addpost", isAuthenticated, upload.single("image"), addNewPost);
router.get("/all", getAllpost);
router.get("/userpost/all", getUserPost);
router.get("/:id/like", isAuthenticated, likePost);
router.get("/:id/dislike", isAuthenticated, dislikePost);
router.post("/:id/comment", isAuthenticated, addComment);
router.post("/:id/comment/all", isAuthenticated, getCommentOfPost);
router.delete("/delete/:id", isAuthenticated, deletePost);
router.get("/:id/bookmark", isAuthenticated, bookmarkPost);

module.exports = router;
