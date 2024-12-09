import { query} from "../Database/db.js";

export const addLogin = async (req, res) => {
    const { username, password, id_biodata } = req.body;
    try {
        await query("INSERT INTO login (username, password, id_biodata) VALUES (?, ?, ?)",{
            username, password, id_biodata
        });
        res.status(200).json({ message: "Login berhasil ditambahkan" });
    }   catch (error) {
        return res.status(500).json({ message: "Gagal menambahkan login" });
    }
};