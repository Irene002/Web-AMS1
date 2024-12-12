import express from "express";
import {  getAttendance } from "../Controller/Attendance.js";

const router = express.Router();

router.get("/attendance", getAttendance);

export default router;