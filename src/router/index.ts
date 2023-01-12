import { Router } from "express";
import * as UserController from "../controllers/user";
import dataValidator from "../middlewares/dataValidator";

const mainRouter = Router();

mainRouter.get("/", (req, res) => res.send("Healthy"))

mainRouter.post("/user", 
    (req, res, next) => {
        console.log("body:", req.body)
        dataValidator(req, res, next, "newUser")
    },
    UserController.registerUser);

export default mainRouter;