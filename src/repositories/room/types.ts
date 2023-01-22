import { User } from "@prisma/client"
import { Room } from "@prisma/client"

type RoomType = {
    id: number,
    name: string
}

export interface NewRoom extends Room {
    id: number,
    name: string,
    roomType: RoomType,
    users: User[]
}