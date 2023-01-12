import { server } from "./index";
import "./webSocket";

server.listen(process.env.PORT, () => console.log(`Server running on PORT: ${process.env.PORT}`))