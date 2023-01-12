import { Request, Response } from "express";
import * as UserService from "../services/user";

export async function registerUser(req: Request, res: Response) {
    const userResponse = await UserService.registerNewUser(req.body);
    return userResponse;
}