import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "230523",
    database: "attendance_db",
});

export async function testConnection() {
    try {
        const connection = await pool.getConnection();
        console.log("Koneksi ke database berhasil!");
        connection.release();
    } catch (error) {
        console.error("Gagal terhubung ke database:", error);
    }
}


export async function query(command, values) {
    try {
        const [results] = await pool.query(command, values ?? []);
        return results;
    } catch (error) {
        console.error("Query error:", error);
        throw error;
    }
}
