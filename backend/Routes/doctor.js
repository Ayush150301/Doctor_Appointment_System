import {
    updateDoctor,
    deleteDoctor,
    getSingleDoctor,
    getAllDoctor,
  } from "../Controllers/doctorController.js";
  import { authenicate,restrict } from "../auth/verifyToken.js";
  import reviewRouter from "./review.js";
  import express from "express";
  
  const router = express.Router();

  // nested route
  router.use('/:doctorId/review',reviewRouter);
  
  // @route   GET api/user
  router.get("/:id", getSingleDoctor);
  
  // @desc    Get all users
  // @route   GET api/user
  router.get("/", getAllDoctor);
  
  // @desc    Update user info
  // @route   PUT api/user
  router.put("/:id",  authenicate,restrict(['doctor']),updateDoctor);
  
  // @desc    Delete a User
  // @route   DELETE /api/users/:id
  router.delete("/:id",  authenicate,restrict(['doctor']),deleteDoctor);
  
  export default router;
  