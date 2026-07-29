import { coffeeBeans } from "./coffee-beans";
import { liquidCoffee } from "./liquid-coffee";
import { tea } from "./tea";
import { chocolate } from "./chocolate";

import type { ProductCategory, Product } from "@/types/product";


export const productMap: Record<ProductCategory, Product[]> =
{
    "coffee-beans": coffeeBeans,
    "liquid-coffee": liquidCoffee,
    "tea": tea,
    "chocolate": chocolate,
};

export const products = Object.values(productMap).flat();

export function getFeaturedProduct(category: ProductCategory)
{
    return (
        productMap[category].find((p) => p.featured)
        ?? productMap[category][0]
    );
}

// export const products =
//     [
//         ...coffeeBeans,
//         ...liquidCoffee,
//         ...tea,
//         ...chocolate,
//     ];

export
{
    coffeeBeans,
    liquidCoffee,
    tea,
    chocolate,
};