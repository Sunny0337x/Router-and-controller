import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

dotenv.config({ path: "./.env" });

export const app = express();

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(cookieParser());
app.use(cors({ origin: process.env.ORIGIN }));

import healthCheckRouter from "./router/healthCheck.js"

app.use("/api/v1", healthCheckRouter);
