import { io } from "./index.js";

io.on("connection", (socket) => {
    socket.on("send_message", data => {
        console.log(data)
    })
})