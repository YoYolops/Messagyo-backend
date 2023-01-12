import * as T from "./types";
import client from "../database";
import { resolve } from "path";

export async function getAllUsers():Promise<T.UserData[]> {
    const users: T.UserData[] = await client.users.findMany();
    return users;
}

export async function getUser(searchConfig: T.UserSearchConfiguration): Promise<T.UserData | null> {
    if(!Object.keys(searchConfig).length) throw {
        type: "internal_server_error", message: `Internal Error, not valid configuration provided in getUser() at ${resolve("./user.ts")}`
    }

    const foundUser: T.UserData | null = await client.users.findUnique({
        where: searchConfig
    })

    return foundUser;
}

export async function createUser(userData): Promise<T.UserData> {
    const createdUser = await client.users.create({
        data: userData
    })

    return createdUser;
}