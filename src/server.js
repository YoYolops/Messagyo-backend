import { server } from "./index.js";
import "./webSocket.js";

server.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`))