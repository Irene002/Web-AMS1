import express from "express";
import {
    addUsers,
    getUsers,
} from "../Controller/User.js";

const router = express.Router();

router.get("/UserGet", getUsers);
router.post("/UserAdd", addUsers);

export default router;