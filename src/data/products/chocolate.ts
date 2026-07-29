import type { Product } from "@/types/product";

export const chocolate: Product[] = [
    {
        id: "ch-1",
        slug: "dark-chocolate-powder",
        category: "chocolate",
        title: "Dark Chocolate Powder",
        shortDescription:"Premium cocoa powder for rich hot chocolate and desserts.",
        description:"Made from high-quality cocoa beans to deliver an intense chocolate flavor, perfect for cafés, bakeries, restaurants, and beverage preparation.",
        image:"src/assets/demo/photo-1511381939415-e44015466834.jpg",
        gallery: [
            "src/assets/demo/photo-1514996937319-344454492b37.jpg",
        ],
        packages: [
            {
                label: "Retail",
                weight: "500g",
            },
            {
                label: "Wholesale",
                weight: "2kg",
            },
        ],
        applications: [
            "Cafés",
            "Restaurants",
            "Hotels",
            "Wholesale",
        ],
        featured: true,
        available: true,
    },
    {
        id: "ch-2",
        slug: "premium-cocoa-mix",
        category: "chocolate",
        title: "Premium Cocoa Mix",
        shortDescription:"Smooth instant cocoa mix with rich chocolate flavor.",
        description:"An easy-to-prepare cocoa beverage mix offering a creamy texture and balanced sweetness for hospitality and retail markets.",
        image:"src/assets/demo/photo-1549007994-cb92caebd54b.jpg",
        gallery: [],
        packages: [
            {
                label: "Retail",
                weight: "500g",
            },
            {
                label: "Bulk",
                weight: "5kg",
            },
        ],
        applications: [
            "Hotels",
            "Restaurants",
            "Retail",
        ],
        featured: false,
        available: true,
    },
    {
        id: "ch-3",
        slug: "milk-chocolate-drink",
        category: "chocolate",
        title: "Milk Chocolate Drink",
        shortDescription:"Creamy milk chocolate beverage mix for hot and cold drinks.",
        description:"A premium milk chocolate drink mix crafted for cafés and restaurants seeking a smooth and indulgent chocolate experience.",
        image:"src/assets/demo/photo-1572490122747-3968b75cc699.jpg",
        gallery: [],
        packages: [
            {
                label: "Retail",
                weight: "500g",
            },
            {
                label: "Wholesale",
                weight: "2kg",
            },
        ],
        applications: [
            "Cafés",
            "Hotels",
            "Restaurants",
        ],
        featured: false,
        available: true,
    },
];