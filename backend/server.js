import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from './routes/auth.routes.js';
import messageRoutes from './routes/message.routes.js';
import userRoutes from './routes/user.routes.js';

import db from "./db/connectToDb.js";

// const express = require("express");
// const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json()); // to parse the incoming requests JSON payloads (from req.body)
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);


app.listen(PORT, () => {
    db();
    console.log(`Server running on port ${PORT}`);

});