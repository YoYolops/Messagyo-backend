import { Socket } from "socket.io";
import * as MessageRepository from "../../repositories/message";
import * as RoomRepository from '../../repositories/room';
import { getAllUsersFromRoomId } from "../../repositories/user"
import * as T from "./types";

export default function messenger(Socket: Socket, Io): T.Messenger {

    async function subscribeUserIntoSocketRooms(userData: T.MessengerUserData) {
        console.log("Entered messenger subscription method")
        if(!userData.id) throw { type: "internal_server_error", message: "messenger service failed by not receiving user.id" }

        console.log("socket is subscribing users: ")
        const userRooms = await RoomRepository.getAllRoomsFromUserId(userData.id);
        for(const room of userRooms) Socket.join(`room-${room.id}`)
        return;
    }

    async function sendMessage(message: T.MessageRequest) {
        // the user is actually in the room?
        console.log("Entered Messenger sender method")
        const allUsersFromRoom = await getAllUsersFromRoomId(message.roomId)
        const userInRoom = allUsersFromRoom.some(user => user.id === message.senderId)
        if(!userInRoom) throw { type: "unauthorized", message: "User does not belong to the room" }

        console.log('Message is getting out to deliver')
        MessageRepository.saveMessage(message);

        Io.to(`room-${message.roomId}`).emit("deliver_message", message)
    }

    return {
        subscribeUserIntoSocketRooms,
        sendMessage
    }
}


