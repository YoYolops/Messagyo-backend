export interface Encrypter {
    encode(data: string): string;
    verify(plainData: string, encryptedData: string): boolean; 
}