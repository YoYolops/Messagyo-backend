import { MessageData } from "../../repositories/message/types"
import { UserData } from "../../repositories/user/types"


type RoomTypeName = 'private' | 'group'

export interface NewRoomRequest {
    name: string,
    roomType: string,
    participants: string[]
}

export interface NewRoomResponse {
    id: number,
    name: string,
    roomType: RoomTypeName | string,
    users: UserData[],
    messages: MessageData[]
}