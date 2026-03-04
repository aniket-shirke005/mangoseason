import React from "react";
import ProductCard from "./product-card";
import { type Product } from "@/types";

const ProductList = ({data, title}:{data:Product[],title?:string}) => {
    if(!data.length){
        return(
            <div>
                <p>No products found</p>
            </div>
        )
    }
  return (
    <div className="my-10">
        {title && <h2 className="h2-bold mb-4">{title}</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {data.map((item:Product)=>(
                <ProductCard key={item.slug} product={item}/>
            ))}
        </div>
  </div>);
};

export default ProductList;
