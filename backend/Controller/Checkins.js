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
    const { name, jabatan, devisi, status, check_in, check_out, lokasi } = req.body;
    try {
        await query("INSERT INTO checkins (nama, jabatan, devisi, status, check_in, check_out, lokasi) VALUES (?, ?, ?, ?, ?, ?, ?)", [
            name,
            jabatan,
            devisi,
            status, 
            check_in, 
            check_out,
            lokasi,
        ]);
        return res.status(200).json({msh: "Check in ditambahkan"});
    }   catch (error) {
        return res.status(500).json({msg: "Terjadi kesalahan pada server" });
    }
};

// update data 

export const updateCheckins = async (req, res) => {
    const {id} = req.params;
    const {name, jabatan, devisi, status, check_in, check_out, lokasi } = req.body;
    try {
        await query("UPDATE checkins SET nama = ?, jabatan = ?, devisi = ?, status = ?, check_in = ?, check_out = ?, lokasi = ? WHERE id = ?", [
            name,
            jabatan,
            devisi,
            status,
            check_in,
            check_out,
            lokasi,
            id,
        ]);
        return res.status(200).json({msg: "Check in diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// delete data

export const deleteCheckins = async (req, res) => {
    const { id } = req.params;
    try {
        await query("DELETE FROM checkins WHERE id = ?", [id]);
        return res.status(200).json({msg: "Check in dihapus"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan diserver"});
    }
};





