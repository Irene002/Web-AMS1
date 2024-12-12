import { query  } from "../Database/db.js";
import { hashPassword, verifyPassword } from "../Services/PasswordUtils.js";

export const getUsers = async (req, res) => {
    try {
        const Users = await query (`SELECT * FROM user`);
        return res.status(200).json({success: true, data: Users});
    }   catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// add data

export const addUsers = async (req, res) => {
    const { username, password, name, role, division} = req.body;
    try {
        const hashedPassword = await hashPassword(password);
        await query("INSERT INTO user(username, password, name, role, division) VALUES(?, ?, ?, ?, ?)", [username, hashedPassword, name, role, division]);
        return res.status(200).json({msg: "Data ditambahkan"});
    }   catch (error) {
        return res.status(500).json({msg: "Terjadi kesalahan pada server" });
    }
};

// Login data
export const loginUser = async (req, res) => {
    const { username, password} = req.body;
    try {
        await query("SELECT * FROM user WHERE username = ?", [username]);
        if(result.length === 0) {
            return res.status(401).json({ success: false, msg: "Username tidak ditemukan"});
        }
    }   catch (error) {
        return res.status(500).json({msg: "Terjadi kesalahan pada server" });
    }
};