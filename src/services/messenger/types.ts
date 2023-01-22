export interface MessageRequest {
    senderId: number,
    roomId: number,
    content: string
}

export interface MessageResponse { 
    
}

export interface Messenger {
    sendMessage(message: MessageRequest): void,
    subscribeUserIntoSocketRooms(userData: MessengerUserData): Promise<void>
}

export interface MessengerUserData {
    id: number
}