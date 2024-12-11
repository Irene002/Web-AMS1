import mysql from "mysql2/promise"

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "12345Admin",
    database: "attendance_db",
});

async function testConnection() {
    try {
        await db.getConnection(); 
            console.log("Koneksi ke database berasil!");
    }   catch (error) {
        console.error("Gagal terhubung ke database:", error);
    }
}

async function query(command, values) {
    try {
        const [value] = await db.query(command, values ??[]);
        return value
    }   catch (error) {
        console.error(error);
    }
}

export {query, testConnection};
