import { io } from "./index";

io.on("connection", (socket) => {
    socket.on("send_message", data => {
        console.log(data)
    })
})