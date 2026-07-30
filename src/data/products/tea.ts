import type { Product } from "@/types/product";

export const tea: Product[] = [
    {
        id: "tea-1",
        slug: "premium-green-tea",
        category: "tea",
        title: "Premium Green Tea",
        shortDescription: "Fresh green tea leaves with a delicate aroma and refreshing taste.",
        description:"Carefully selected green tea sourced from renowned tea gardens, offering a naturally refreshing flavor suitable for cafés, hotels, and retail markets.",
        image:"src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
        gallery: [
            "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
        ],
        packages: [
            {
                label: "Retail",
                weight: "100g",
            },
            {
                label: "Retail",
                weight: "250g",
            },
            {
                label: "Wholesale",
                weight: "1kg",
            },
        ],
        applications: [
            "Retail",
            "Hotels",
            "Restaurants",
        ],
        featured: true,
        available: true,
    },
    {
        id: "tea-2",
        slug: "earl-grey",
        category: "tea",
        title: "Earl Grey",
        shortDescription:"Classic black tea blended with natural bergamot flavor.",
        description:"A premium Earl Grey tea offering an elegant citrus aroma and full-bodied taste for refined tea experiences.",
        image:"src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
        gallery: [],
        packages: [
            {
                label: "Retail",
                weight: "250g",
            },
        ],
        applications: [
            "Retail",
            "Hotels",
            "Restaurants",
            "Office",
        ],
        featured: false,
        available: true,
    },
    {
        id: "tea-3",
        slug: "mint-tea",
        category: "tea",
        title: "Mint Tea",
        shortDescription: "Refreshing herbal tea blended with natural mint leaves.",
        description:"A soothing herbal infusion with refreshing mint flavor, ideal for cafés and hospitality environments.",
        image:"src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
        gallery: [],
        packages: [
            {
                label: "Retail",
                weight: "150g",
            },
            {
                label: "Wholesale",
                weight: "1kg",
            },
        ],
        applications: [
            "Retail",
            "Hotels",
            "Restaurants",
        ],
        featured: false,
        available: true,
    },
];