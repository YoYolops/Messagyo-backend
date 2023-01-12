import { Router } from "express";
import userRouter from "./user";

const mainRouter = Router();
mainRouter.use("/user", userRouter);

mainRouter.get("/", (req, res) => res.send("Healthy"))

export default mainRouter;