import { Router } from "express";
import * as UserController from "../controllers/user";
import dataValidator from "../middlewares/dataValidator";

const userRouter = Router();

userRouter.post("/",
    (req, res, next) => dataValidator(req, res, next, "newUser"),
    UserController.registerUser)

userRouter.post("/login",
    (req, res, next) => dataValidator(req, res, next, "login"),
    UserController.logUser)
    
export default userRouter;