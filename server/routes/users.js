import express from "express";
import {
  deleteUser,
  dislike,
  getUser,
  like,
  subscribeUser,
  unsubscribeUser,
  updateUser,
} from "../controllers/user.js";
import { verifyToken } from "../verifyToken.js";

const router = express.Router();

// update user
router.put("/:id", verifyToken, updateUser);

// delete user
router.delete("/:id", verifyToken, deleteUser);

// get a user
router.get("/find/:id", getUser);

//subscribe a user
router.put("/sub/:id", verifyToken, subscribeUser);

// unsubscribe a user
router.put("/unsub/:id", verifyToken, unsubscribeUser);

// like a video
router.put("/like/:videoId", verifyToken, like);

// dislike a video
router.put("/dislike/:videoId", verifyToken, dislike);

export default router;
