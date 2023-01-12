import { Request, Response } from "express";
import * as UserService from "../services/user";

export async function registerUser(req: Request, res: Response) {
    const userResponse = await UserService.registerNewUser(req.body);
    return res.status(201).send(userResponse);
}

export async function logUser(req:Request, res: Response) {
    const logUserResponse = await UserService.loginUser(req.body);
    return res.status(200).send(logUserResponse);
}

