import { query} from "../Database/db.js";

export const getLogin = async (req, res) => {
    try {
        const Login = await query ('SELECT * FROM login');
        return res.status(200).json({success: true, data: Login});
    }   catch (error) {
        console.error("Terjadi Kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// add data
export const addLogin = async (req, res) => {
    const { username, password, id_biodata, last_login, created_at } = req.body;
    try {
        await query("INSERT INTO login (username, password, id_biodata, last_login, created_at) VALUES (?, ?, ?, ?, ?)",{
            username,
            password,
            id_biodata,
            last_login,
            created_at,
        });
        res.status(200).json({ message: "Login berhasil ditambahkan" });
    }   catch (error) {
        return res.status(500).json({ message: "Gagal menambahkan login" });
    }
};

// update data
export const updateLogin = async (req, res) => {
    const {id} = req.params;
    const {username, password, id_biodata, last_login, created_at, } =req.body;
    try {
        await query("UPDATE login SET username = ?, password = ?, id_biodata = ? last_login = ?, created_at = ? WHERE id = ?", [
            username,
            password,
            id_biodata,
            last_login,
            created_at,
        ]);
        return res.status(200).json({msg: "Login berhasil diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Gagal mengupdate login"});
    }
};



