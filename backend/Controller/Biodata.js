import { query } from "../Database/db.js";

export const getBiodata = async (req, res) => {
    try {
        const biodata = await query("SELECT * FROM biodata");
        return res.status (200).json({success: true, data: biodata});
    } catch (error) {
        console.error("Terjadi kesalahan", error);
        return res.status(500).json({msg: "Terjadi kesalahan pada sever"});
    }
};