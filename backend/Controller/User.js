import { query } from "../Database/db.js";


export const updateUser = async (req, res) => {
    const {id} = req.params;
    const {username, password} = req.body;
    try {
        await query("UPDATE user SET username = ?, password = ? WHERE id = ?", [
            username,
            password,
            id,
        ]);
        return res.status(200).json({msg: "User diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};