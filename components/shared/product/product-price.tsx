import { cn } from "@/lib/utils";
import React from "react";

const ProductPrice = ({price,className}:{price:number,className?:string}) => {
  const stringValue = price.toFixed(2)

  const [intVal,floatVal] = stringValue.split('.')

  return (
    <p className={cn('text-2xl',className)}>
      <span className="text-xs align-super">$</span>
      <span>{intVal}</span>
      <span className="text-xs align-super">.{floatVal}</span>
    </p>);
};

export default ProductPrice;
