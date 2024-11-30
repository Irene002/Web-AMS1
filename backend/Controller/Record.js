import { query } from '../Database/db.js'

export const getRecords = async (req, res) => {
    try {
        const Records = await query (`SELECT * FROM records`);
        return res.status(200).json ({success: true, data: Records});
    } catch (error) {
        console.error('Data error', error);
        return res.status(500).json({msg: 'Data error within the server'}); 
    }
};

// Check In

export const addRecord = async (req, res) => {
    const {checkin} = req.body;
    try {
        await query("INSERT INTO records (check_in, check_out)  VAlUES (?)", 
            [checkin]);
            return res.status(200).json({msg: "Check in Successfull"});
    } catch (error) {
        return res.status(500).json({msg: 'Error within the server'});
    }
};

// CheckOut
export const updateRecord = async (req, res) => {
    const {checkout} = req.body;
    try {
        await query('UPDATE records SET check_out = ? WHERE check_out is NULL ORDER BY id_records DESC LIMIT 1', [checkout]);
        return res.status(200).json({msg: 'Check Out Successful'})
    } catch (error) {
        return res.status(500).json({msg: 'Error within the server'})
    }
}