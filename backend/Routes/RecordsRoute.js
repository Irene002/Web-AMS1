import express from 'express';
import {
    addRecord,
    updateRecord,
} from "../Controller/Record.js";

const router = express.Router();

router.post('/checkin', addRecord)
router.post('/checkout', updateRecord)

export default router;
