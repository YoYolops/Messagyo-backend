export interface TokenManager {
    encode(secret: string, data?: string): string,
    decode(token: string, secret: string): any
}