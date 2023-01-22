export interface RegistrationResponse {
    id: number,
    username: string
}

export interface NewUserRequest {
    username: string,
    password: string
}

export interface LoginRequest {
    username: string,
    password: string
}

export interface LoginResponse {
    token: string;
}