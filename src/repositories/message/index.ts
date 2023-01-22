import { Message } from "@prisma/client";
import client from "../../database";
import * as T from "./types";

// pegar mensagens por room
// pegar mensagens por user por room

export async function saveMessage(message): Promise<Message> {
    const { roomId, senderId } = message;

    const savedMessage = await client.message.create({
        data: {
            content: message.content,
            sender: {
                connect: { id: senderId }
            },
            room: {
                connect: { id: roomId }
            }
        }
    })

    return savedMessage
}