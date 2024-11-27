import express from "express";
import {
    getUser,
    updateUser,
} from "../Controller/User.js";

const router = express.Router();

router.get("/user", getUser);
router.patch("/user/:id", updateUser);

export default router;