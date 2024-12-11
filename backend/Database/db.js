import mysql from "mysql2/promise";
import dotenv, { config } from "dotenv";

dotenv.config();

export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
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
