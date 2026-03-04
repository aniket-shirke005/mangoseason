import {prisma} from "@/lib/prisma"
import sampleData from "./sample-data";


export async function main() {

    await prisma.product.deleteMany()
    await prisma.product.createMany({data: sampleData.products})

    console.log('data seeded successfully')
}

main().catch(console.error).finally(async ()=>{
    await prisma.$disconnect();
});