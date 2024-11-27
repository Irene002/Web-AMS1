import express from "express"
import {
    updateUser,
} from "../Controller/User.js";

const router = express.Router();

router.patch("/user/:id", updateUser);

export default router;