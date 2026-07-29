import type { Product } from "@/types/product";

export const tea: Product[] = [
    {
        id: "tea-1",
        slug: "premium-green-tea",
        category: "tea",
        title: "Premium Green Tea",
        shortDescription: "Fresh green tea leaves with a delicate aroma and refreshing taste.",
        description:"Carefully selected green tea sourced from renowned tea gardens, offering a naturally refreshing flavor suitable for cafés, hotels, and retail markets.",
        image:"src/assets/demo/photo-1544787219-7f47ccb76574.jpg",
        gallery: [
            "src/assets/demo/photo-1495474472287-4d71bcdd2085.jpg",
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
        image:"src/assets/demo/photo-1515823064-d6e0c04616a7.jpg",
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
        image:"src/assets/demo/photo-1597481499750-3e6b22637e12.jpg",
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