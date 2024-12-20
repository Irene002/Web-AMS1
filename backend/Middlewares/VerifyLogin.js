import bcrypt from "bcryptjs";
import { pool } from "../Database/db.js";

const verifyLogin = async (req, res, next) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ msg: "Username and password are required" });
        }

        const [results] = await pool.query("SELECT * FROM user WHERE username = ?", [username]);

        if (results.length === 0) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

        const user = results[0];
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ msg: "Invalid username or password" });
        }

         // Send user details back in a `user` object
        return res.status(200).json({
            user: {
                id_user: user.id_user,
                username: user.username
            }
        });

    } catch (err) {
        console.error("Error verifying login:", err);
        res.status(500).json({ msg: "Internal server error" });
    }
};

export default verifyLogin;
