export interface Encrypter {
    encode(data: string, saltRounds?: number): string;
    verify(plainData: string, encryptedData: string): boolean; 
}