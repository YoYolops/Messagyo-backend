import { TokenManager } from "./types";
import jwt from "jsonwebtoken";

export default function tokenAdapter(): TokenManager {
    const SECRET = process.env.SECRET ?? "eupassarinho";

    function encode(secret=SECRET, data) { return jwt.sign(data, secret) }
    function decode(token, secret=SECRET) { return jwt.verify(token, secret) }

    return {
        encode,
        decode
    }
}