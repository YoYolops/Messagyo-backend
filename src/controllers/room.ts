import { Request, Response } from "express";
import { createNewRoom } from "../services/room"

export async function registerNewRoom(req: Request, res: Response) {
    const newUserCreated = await createNewRoom(req.body);
    return res.status(201).send(newUserCreated)
}