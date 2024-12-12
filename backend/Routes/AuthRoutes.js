import express from "express";
import { pool } from "../Database/db.js";
import { hashPassword } from "../Services/PasswordUtils.js";
import { validateLoginInput } from "../Middlewares/validateLogin.js";
import verifyLogin from "../Middlewares/VerifyLogin.js";

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Username and password are required' });
    }

    try {

        const hashedPassword = await hashPassword(password);

        const [result] = await pool.query(
            'INSERT INTO login (username, password) VALUES (?, ?)',
            [username, hashedPassword]
        );

        res.status(201).json({ msg: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user:', err);
        res.status(500).json({ msg: 'Internal server error' });
    }
});

router.post('/login', validateLoginInput, verifyLogin, (req, res) => {
    const { id_user, username } = req.user;
    res.status(200).json({
        msg: 'Login successful',
        user: { id_user, username },
    });
});

export default router;
