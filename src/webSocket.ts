import { io } from "./index";
import messenger from "./services/messenger"

io.on("connection", (socket) => {
    console.log("Web socket connection event")
    const Messenger = messenger(socket, io);

    socket.on("subscribe_user", userData => Messenger.subscribeUserIntoSocketRooms(userData))

    socket.on("send_message", (data, callback) => {
        console.log(data)
        callback("Backend received your data")
    })
})