import express from "express";
import {
    addCheckins,
    deleteCheckins,
    getCheckins,
    updateCheckins,
} from "../Controller/Checkins.js";

const router = express.Router();

router.get("/checkins", getCheckins);
router.post("/checkins", addCheckins);
router.patch("/checkins/:id", updateCheckins);
router.delete("/checkins/:id", deleteCheckins);

export default router;