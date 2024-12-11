// Routes/AuthRoutes.js
import express from "express";
import { pool } from "../Database/db.js";
import { hashPassword } from "../Services/PasswordUtils.js";
import { validateLoginInput } from "../Middlewares/validateLogin.js"; // Mengimpor middleware validasi
import verifyLogin from "../Middlewares/VerifyLogin.js";

const router = express.Router();

// Rute signup untuk membuat user baru
router.post('/signup', async (req, res) => {
    const { username, password } = req.body;

    if (!username || !password) {
        return res.status(400).json({ msg: 'Username and password are required' });
    }

    try {
        // Hash password sebelum disimpan ke database
        const hashedPassword = await hashPassword(password);

        // Masukkan data user ke dalam database
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

// Rute login dengan validasi input dan verifikasi login
router.post('/login', validateLoginInput, verifyLogin, (req, res) => {
    const { id_user, username } = req.user;
    res.status(200).json({
        msg: 'Login successful',
        user: { id_user, username },
    });
});

export default router;
