import type { Product } from "@/types/product";

export const liquidCoffee: Product[] = [
    {
        id: "lc-1",
        slug: "classic-liquid-coffee",
        category: "liquid-coffee",
        title: "Classic Liquid Coffee",
        shortDescription: "Ready-to-use liquid coffee concentrate with a rich, balanced flavor.",
        description: "A premium liquid coffee concentrate developed for cafés, hotels, restaurants, and beverage manufacturers. Delivers consistent taste while simplifying beverage preparation.",
        image:"src/assets/demo/photo-1495474472287-4d71bcdd2085.jpg",
        gallery: [
            "src/assets/demo/photo-1509042239860-f550ce710b93.jpg",
            "src/assets/demo/photo-1511920170033-f8396924c348.jpg",
        ],
        packages: [
            {
                label: "Bottle",
                weight: "500ml",
            },
            {
                label: "Bottle",
                weight: "1L",
            },
            {
                label: "Bulk",
                weight: "5L",
            },
        ],
        applications: [
            "Hotels",
            "Restaurants",
            "Cafés",
            "Wholesale",
        ],
        featured: true,
        available: true,
    },
    {
        id: "lc-2",
        slug: "vanilla-latte-base",
        category: "liquid-coffee",
        title: "Vanilla Latte Base",
        shortDescription: "Smooth coffee concentrate infused with natural vanilla flavor.",
        description: "Designed for premium iced and hot vanilla coffee beverages with consistent flavor and aroma.",
        image: "src/assets/demo/photo-1498804103079-a6351b050096.jpg",
        gallery: [],
        packages: [
            {
                label: "Bottle",
                weight: "1L",
            },
        ],
        applications: [
            "Cafés",
            "Restaurants",
        ],
        featured: false,
        available: true,
    },
    {
        id: "lc-3",
        slug: "caramel-coffee-concentrate",
        category: "liquid-coffee",
        title: "Caramel Coffee Concentrate",
        shortDescription:"Rich caramel-flavored concentrate for specialty coffee beverages.",
        description:"Perfect for cafés and beverage chains looking to prepare caramel coffee drinks quickly while maintaining premium quality.",
        image:"src/assets/demo/photo-1461023058943-07fcbe16d735.jpg",
        gallery: [],
        packages: [
            {
                label: "Bottle",
                weight: "1L",
            },
            {
                label: "Bulk",
                weight: "5L",
            },
        ],
        applications: [
            "Cafés",
            "Wholesale",
        ],
        featured: false,
        available: true,
    },
];