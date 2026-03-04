"use server"

import {prisma} from "@/lib/prisma"
// import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCT_LIMIT } from "@/lib/constants";


export async function getLatestProducts() {

    try {
        const data = await prisma.product.findMany({
            take: LATEST_PRODUCT_LIMIT,
            orderBy:{createdAt:'desc'}
        })
        
        return data.map(product => ({
            ...product,
            price: String(product.price),
            rating: String(product.rating)
        })) 
    } catch (error) {
        console.error(error,'prisma error for getting products')
        return []
    }finally{
        prisma.$disconnect()
    }
}


// get a single product by its slug

export async function getProductBySlug(slug:string){
    return await prisma.product.findFirst({
        where : {slug:slug},
    })
}