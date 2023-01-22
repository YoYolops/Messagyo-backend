import client from "../../database"
import * as T from "./types"
import { Room } from "@prisma/client"

export async function getAllRoomsFromUserId(userId: number): Promise<Room[]> {
    const usersRooms = await client.room.findMany({
        where: {
            users: {
                some: { id: userId }
            }
        },
        include: { roomType: true }
    })
    return usersRooms
}

export async function createNewPopulatedRoom(newPopulatedRoomData): Promise<T.NewRoom> {
    const { name, roomType, participants } = newPopulatedRoomData

    const createdRoom = await client.room.create({
        data: {
            name: name,
            roomType: {
                connect: { name: roomType }
            },
            users: {
                connect: participants.map(username => ({ username }))
            },
        },
        include: {
            roomType: true,
            users: true
        }
    })
    return createdRoom
}

