import { query } from "../Database/db.js";

export const getAttendance = async (req, res) => {
    try {
        const Attendance = await query(`SELECT u.name, u.role, u.division, a.date, a.check_in, a.check_out, a.status FROM user u LEFT JOIN attendance a ON u.id_user = a.id_user`);
        return res.status(200).json({ success: true, data: Attendance });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};


    // Record Attendance Data Table

export const getRecordAttendance = async (req, res) => {

    const { id_user } = req.query;

    if (!id_user) {
        return res.status(400).json({ msg: "User ID is required." });
    }

    try {
        const RecordAttendance = await query(`SELECT date, check_in, check_out, status FROM attendance WHERE id_user = ? ORDER BY date DESC`, [id_user]);
        
        if (RecordAttendance.length === 0) {
            return res.status(404).json({msg: 'No attendance records found for this user.'})
        }
        return res.status(200).json({ success: true, data: RecordAttendance });
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({ msg: "Terjadi kesalahan pada server" });
    }
};



// Check In

export const checkIn = async (req, res) => {
    const { id_user, date, check_in, status } = req.body;

    if (!id_user || !date || !check_in) {
        return res.status(400).json({ msg: "User  ID, Date, and Check-in time are required." });
    }

    try {

        const result = await query(
            "INSERT INTO attendance (id_user, date, check_in, check_out, status) VALUES (?, ?, ?, NULL, ?)",
            [id_user, date, check_in, status || '']
        );

        const id_attendance = result.insertId; 

        return res.status(200).json({ msg: "Check In added successfully", id_attendance });
    } catch (error) {
        console.error("Error during check-in:", error);
        return res.status(500).json({ msg: "Server Error during check-in" });
    }
};

// Check Out

export const checkOut = async (req, res) => {
    const { check_out, id_attendance } = req.body; 

    // Validate input
    if (!check_out || !id_attendance) {
        return res.status(400).json({ success: false, message: "Check-out time and attendance ID are required." });
    }

    try {
        const result = await query(
            "UPDATE attendance SET check_out = ? WHERE id_attendance = ? AND check_out IS NULL",
            [check_out, id_attendance]
        );

        if (result.affectedRows === 0) {
            return res.status(404).json({ success: false, message: "No active check-in found for this attendance ID." });
        }

        return res.status(200).json({ success: true, message: "Check-out recorded successfully." });
    } catch (error) {
        console.error("Error during check-out:", error);
        return res.status(500).json({ success: false, message: "Server error during check-out." });
    }
};
