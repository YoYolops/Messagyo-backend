export interface TokenManager {
    encode(data: object, secret?: string): string,
    decode(token: string, secret: string): any
}