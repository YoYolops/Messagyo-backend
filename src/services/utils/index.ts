export function sanitizeObject(objectData: object, undesirableProperties: string[]): object {
    const hashTable = undesirableProperties.reduce((acc, current) => {
        acc[current] = true
        return acc;
    }, {});

    const objectDataClone = { ...objectData }
    for(const key in objectData) if(hashTable[key]) delete objectDataClone[key];

    return objectDataClone;
}