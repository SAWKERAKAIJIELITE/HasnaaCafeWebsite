import type { ProductCategory } from "@/types/product";

export function getCategoryLabel(category: ProductCategory)
{
    switch (category)
    {
        case "coffee-beans":
            return "Coffee Beans";

        case "liquid-coffee":
            return "Liquid Coffee";

        case "tea":
            return "Tea";

        case "chocolate":
            return "Chocolate";
    }
}