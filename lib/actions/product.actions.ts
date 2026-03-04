import {prisma} from "@/lib/prisma"
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";


export async function getLatestProducts() {

    try {
        const data = await prisma.product.findMany({
            take: LATEST_PRODUCT_LIMIT,
            orderBy:{createdAt:'desc'}
        })
        
        return convertToPlainObject(data) 
    } catch (error) {
        console.error(error,'prisma error for getting products')
        return []
    }finally{
        prisma.$disconnect()
    }
 
}
