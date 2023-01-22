import * as T from "./types";
import client from "../../database";
import { resolve } from "path";
import { Room, User } from "@prisma/client";

export async function getAllUsers():Promise<T.UserData[]> {
    const users: T.UserData[] = await client.user.findMany();
    return users;
}

export async function getUser(searchConfig: T.UserSearchConfiguration): Promise<User | null> {
    if(!Object.keys(searchConfig).length) throw {
        type: "internal_server_error", message: `Internal Error, not valid configuration provided in getUser() at ${resolve("./user.ts")}`
    }

    const foundUser: T.UserData | null = await client.user.findUnique({
        where: searchConfig
    })

    return foundUser;
}

export async function createUser(userData): Promise<User> {
    const createdUser = await client.user.create({
        data: userData
    })

    return createdUser;
}

export async function insertUserIntoMultipleRooms(insertionData): Promise<Room[]> {
    const { user, rooms } = insertionData;

    const userNewRooms = await client.user.update({
        where: { id: user.id },
        data: {
            rooms: {
                connect: { id: rooms.map(room => room.id) }
            }
        },
        include: {
            rooms: {
                include: { roomType: true } 
            }
        }
    })

    return userNewRooms.rooms;
}

export async function getAllUsersFromRoomId(roomId: number): Promise<T.UserData[]> {
    const foundUsers = await client.user.findMany({
        where: {
            rooms: {
                some: { id: roomId }
            }
        }
    })
    return foundUsers;
}