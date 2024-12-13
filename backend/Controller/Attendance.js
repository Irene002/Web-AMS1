import { query  } from "../Database/db.js";

export const getAttendance = async (req, res) => {
    try {
        const Attendance = await query (`SELECT u.name, u.role, u.division, a.date, a.check_in, a.check_out, a.status FROM user u LEFT JOIN attendance a ON u.user_id = a.id_user`);
        return res.status(200).json({success: true, data: Attendance});
    }   catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// add data

export const addAttendance = async (req, res) => {
    const { id_user, check_in, check_out } = req.body;
    try {
        await query("INSERT INTO attendance (id_attendance, username , check_in, check_out) VALUES (?, ?, ?, ?)", [
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

export const updateAttendance = async (req, res) => {
    const {id_attendance} = req.params;
    const { id_user, check_in, check_out } = req.body;
    try {
        await query("UPDATE attendance SET id_user = ?, check_in = ?, check_out = ? WHERE id = ?", [
            id_user,
            check_in,
            check_out,
            id_attendance,
        ]);
        return res.status(200).json({msg: "Check in diupdate"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan pada server"});
    }
};

// delete data

export const deletettendance = async (req, res) => {
    const { id_attendance } = req.params;
    try {
        await query("DELETE FROM attendance WHERE id = ?", [id_attendance]);
        return res.status(200).json({msg: "Check in dihapus"});
    }   catch (error) {
        console.log(error)
        return res.status(500).json({msg: "Terjadi kesalahan diserver"});
    }
};
