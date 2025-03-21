import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = expense();
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extends: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

export { app };