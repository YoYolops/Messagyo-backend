import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()
async function main() {
    const seedRoomTypes = await prisma.roomType.createMany({
        data: [
            { name: "group" },
            { name: "private" },
        ]
    })
    console.log("CREATED: ")
    console.log("")
    console.log(seedRoomTypes)
}
main()
    .then(async () => { await prisma.$disconnect() })
    .catch(async e => {
        console.error(e)
        await prisma.$disconnect()
    })