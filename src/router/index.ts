import { Router } from "express";
import userRouter from "./user";
import roomRouter from "./room";

const mainRouter = Router();
mainRouter.use("/user", userRouter);
mainRouter.use("/room", roomRouter)

mainRouter.get("/", (req, res) => res.send("Healthy"))

export default mainRouter;