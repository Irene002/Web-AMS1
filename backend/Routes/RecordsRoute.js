import express from 'express'
import {
    addRecord,
    updateRecord,
} from "../Controller/records.js";

const router = express.Router();

router.post('/checkin', addRecord)
router.post('/checkout', updateRecord)