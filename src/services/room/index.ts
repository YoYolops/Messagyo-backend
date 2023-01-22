import * as T from "./types"
import { createNewPopulatedRoom  } from "../../repositories/room"

export async function createNewRoom(room: T.NewRoomRequest): Promise<T.NewRoomResponse> {
    if(!room.participants.length) throw { type: "unprocessable_entity", message: "You cannot create an empty room" }

    const newRoomCreated = await createNewPopulatedRoom(room)

    const responseData = {
        ...newRoomCreated,
        messages: [],
        roomType: newRoomCreated.roomType.name,
    }

    delete responseData.roomTypeId

    return responseData
}