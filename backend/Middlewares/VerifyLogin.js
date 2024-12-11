import bcrypt from "bcryptjs";
import { pool } from "../Database/db.js";

const verifyLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        // Validasi input
        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required" });
        }

        // Query database untuk mencari user
        const [results] = await pool.query("SELECT * FROM login WHERE username = ?", [username]);

        if (results.length === 0) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

        const user = results[0];

        // Bandingkan password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

        // Set user dalam request object
        req.user = { id_user: user.id_user, username: user.username };
        next();
    } catch (err) {
        console.error("Error verifying login:", err);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export default verifyLogin;
