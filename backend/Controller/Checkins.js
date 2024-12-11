import { query  } from "../Database/db.js";

export const getCheckins = async (req, res) => {
    try {
        const Checkins = await query (`SELECT * FROM checkins`);
        return res.status(200).json({success: true, data: Checkins});
    }   catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// add data

export const addCheckins = async (req, res) => {
    const { id_user, check_in, check_out } = req.body;
    try {
        await query("INSERT INTO checkins (id_checkins, username , check_in, check_out) VALUES (?, ?, ?, ?)", [
            id_user,
            check_in, 
            check_out,
        ]);
        return res.status(200).json({msg: "Check in ditambahkan"});
    }   catch (error) {
        return res.status(500).json({msg: "Terjadi kesalahan pada server" });
    }
};

// update data 

export const updateCheckins = async (req, res) => {
    const {id_checkins} = req.params;
    const { id_user, check_in, check_out } = req.body;
    try {
        await query("UPDATE checkins SET id_user = ?, check_in = ?, check_out = ? WHERE id = ?", [
            id_user,
            check_in,
            check_out,
            id_checkins,
        ]);
        return res.status(200).json({msg: "Check in diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// delete data

export const deleteCheckins = async (req, res) => {
    const { id_checkins } = req.params;
    try {
        await query("DELETE FROM checkins WHERE id = ?", [id_checkins]);
        return res.status(200).json({msg: "Check in dihapus"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan diserver"});
    }
};
