import express from "express";
import { validateLoginInput } from "../Middlewares/validateLogin.js";
import verifyLogin from "../Middlewares/VerifyLogin.js";

const router = express.Router();

router.post('/login', validateLoginInput, verifyLogin, (req, res) => {
    const { user_id, username } = req.user;
    res.status(200).json({
        msg: 'Login successful',
        user: { user_id, username },
    });
});

export default router;
