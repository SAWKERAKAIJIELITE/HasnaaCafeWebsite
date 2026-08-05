import { coffeeBeans } from "./coffee-beans";
import { liquidCoffee } from "./liquid-coffee";
import { tea } from "./tea";
import { chocolate } from "./chocolate";
import { getProducts } from "@/services/products/products.service";

import type { ProductCategory, Product } from "@/types/product";


const productsContent = await getProducts();

export const productMap: Record<ProductCategory, Product[]> =
{
    "coffee-beans": productsContent.filter(product => product.data.category == 'coffee-beans').map(product=>product.data),
    "liquid-coffee": productsContent.filter(product => product.data.category == 'liquid-coffee').map(product => product.data),
    "tea": productsContent.filter(product => product.data.category == 'tea').map(product => product.data),
    "chocolate": productsContent.filter(product => product.data.category == 'chocolate').map(product => product.data),
};
export const products = Object.values(productMap).flat();
console.log(getFeaturedProduct('coffee-beans'))

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