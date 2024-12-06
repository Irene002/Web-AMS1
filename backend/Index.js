import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { testConnection } from "./Database/db.js";
import CheckRouter from "./Routes/Checkins.js";
import UserRouter from "./Routes/User.js";
import Record from './Routes/RecordsRoute.js'

dotenv .config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(CheckRouter);
app.use(UserRouter);
app.use(Record);

app.listen(process.env.APP_PORT, async () => {
    await testConnection();
    console.log(`http://localhost:${process.env.APP_PORT}`);
});