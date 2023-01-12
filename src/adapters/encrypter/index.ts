import { Encrypter } from "./types";
import bcrypt from "bcrypt";

export default function encrypterAdapter(): Encrypter {
    const SALT_ROUNDS = +process.env.SALT_ROUNDS ?? 10;

    function verify(plainData, encryptedData) {
        return bcrypt.compareSync(plainData, encryptedData);
    }

    function encode(plainData, saltRounds=SALT_ROUNDS) {
        return bcrypt.hashSync(plainData, saltRounds);
    }

    return {
        verify,
        encode
    }
}