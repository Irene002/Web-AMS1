import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./Database/db.js";
import AttendanceRouter from "./Routes/Attendance.js";
import AuthRouter from "./Routes/AuthRoutes.js";
import UserRouter from "./Routes/User.js";


dotenv .config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(AttendanceRouter);
app.use(AuthRouter);
app.use(UserRouter);

app.listen(process.env.APP_PORT, async () => {
    await testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});