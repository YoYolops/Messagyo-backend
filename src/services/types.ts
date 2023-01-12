export interface RegistrationResponse {
    id: number,
    username: string
}

export interface NewUserRequest {
    username: string,
    password: string
}