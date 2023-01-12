import * as T from "./types";
import * as UserRepository from "../repositories/user";
import bcryptAdapter from "../adapters/encrypter";
import tokenAdapter from "../adapters/tokenManager";

const EncrypterAdapter = bcryptAdapter();
const TokenAdapter = tokenAdapter();

export async function registerNewUser(newUserData: T.NewUserRequest): Promise<T.RegistrationResponse> {
    const alreadyRegisteredUser = await UserRepository.getUser({ username: newUserData.username });
    if(alreadyRegisteredUser) throw { type: "conflict", message: "This username is already registered" };

    const newUserCreated = await UserRepository.createUser({
        ...newUserData,
        password: EncrypterAdapter.encode(newUserData.password)
    })

    delete newUserCreated.password;

    return newUserCreated;
}