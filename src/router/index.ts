import { Router } from "express";
import * as UserController from "../controllers/user";

const mainRouter = Router();

mainRouter.get("/", (req, res) => res.send("Healthy"))

mainRouter.post("/user", UserController.registerUser);

export default mainRouter;