import express from "express";
import {  getAttendance } from "../Controller/Attendance.js";
import { checkIn } from "../Controller/Attendance.js";
import { checkOut } from "../Controller/Attendance.js";
import { getRecordAttendance } from "../Controller/Attendance.js";

const router = express.Router();

router.get("/attendance", getAttendance);
router.post("/checkin", checkIn);
router.post("/checkout", checkOut);
router.get("/getAttendance", getRecordAttendance);

export default router;