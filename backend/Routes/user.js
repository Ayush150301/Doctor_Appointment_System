import {
  updateUser,
  deleteUser,
  getSingleUser,
  getAllUser,
} from "../Controllers/userController.js";
import express from "express";
import { authenicate,restrict } from "../auth/verifyToken.js";

const router = express.Router();

// @route   GET api/user
router.get("/:id", authenicate,restrict(['patient']),getSingleUser);

// @desc    Get all users
// @route   GET api/user
router.get("/",authenicate,restrict(['admin']), getAllUser);

// @desc    Update user info
// @route   PUT api/user
router.put("/:id", authenicate,restrict(['patient']), updateUser);

// @desc    Delete a User
// @route   DELETE /api/users/:id
router.delete("/:id", authenicate,restrict(['patient']), deleteUser);

export default router;
