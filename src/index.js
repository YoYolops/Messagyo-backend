import express from "express";
import dotenv from "dotenv";
import http from "http";
import { Server } from "socket.io";

const expressApp = express();
const server = http.createServer(expressApp);
const io = new Server(server);

dotenv.config();

server.listen(process.env.PORT, () => console.log(`Running on port ${process.env.PORT}`))