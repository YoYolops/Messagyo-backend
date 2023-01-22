import { Router } from "express";
import * as RoomController from "../controllers/room"

const roomRouter = Router()

roomRouter.post("/", RoomController.registerNewRoom)

export default roomRouter