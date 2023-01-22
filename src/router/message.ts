import { Router } from "express";

const messageRouter = Router()

messageRouter.get("/", (req, res) => res.send("MessageRouter says hi!"))

export default messageRouter