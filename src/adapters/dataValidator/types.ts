export interface DataValidator {
    verify(data: any, schemaName: string): boolean;
}