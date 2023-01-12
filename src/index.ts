import express from "express";
import dotenv from "dotenv";
import http from "http";
import "express-async-errors";
import { Server } from "socket.io";
import errorHandler from "./middlewares/error";
import mainRouter from "./router";

const expressApp = express();
expressApp.use(mainRouter);
expressApp.use(errorHandler);
expressApp.use(express.json())

const server = http.createServer(expressApp);

const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ["PUT", "GET", "POST", "DELETE", "OPTIONS"],
    }
});

dotenv.config();

export { server, io }