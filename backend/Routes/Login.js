import express from 'express';
import {
    addLogin,
} from "../Controller/Login.js";

const router = express.Router();

router.post('/checkin', addLogin)

export default router;
