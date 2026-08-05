import type { Product } from "@/types/product";

export const coffeeBeans: Product[] =
    [
        {
            id: "cb-1",
            slug: "premium-arabica",
            category: "coffee-beans",
            // title: {
            //     en:"Premium Arabica",
            //     ar:"أرابيكا فاخرة"
            // },
            title: "Premium Arabica",
            shortDescription: "Carefully selected Arabica beans with a balanced aroma.",
            description:"Premium Arabica beans sourced from high-altitude farms to deliver a smooth, rich, and aromatic cup suitable for cafés, restaurants, and premium retailers.",
            image: "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
            gallery: [
                "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
                "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
            ],
            // origin: {en:"Brazil",ar:"البرازيل"},
            origin: "Brazil",
            roastLevel: "Medium",
            packages: [
                {
                    // label: {en:"Retail",ar:"المفرق"},
                    label: "Retail",
                    weight: "250g",
                },
                {
                    // label: { en: "Retail", ar: "المفرق" },
                    label: "Retail",
                    weight: "500g",
                },
                {
                    // label: { en: "wholesale", ar: "الجملة" },
                    label: "wholesale",
                    weight: "1kg",
                },
            ],
            applications: [
                "Retail",
                "Hotels",
                "Restaurants",
                "Cafés",
            ],
            featured: true,
            available: true,
        },
        {
            id: "cb-2",
            slug: "espresso-blend",
            category: "coffee-beans",
            title: "Espresso Blend",
            shortDescription: "Rich crema with deep chocolate notes.",
            description: "Crafted for espresso lovers seeking full body, balanced acidity, and long-lasting crema.",
            image: "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
            gallery: [],
            origin: "Colombia",
            roastLevel: "Dark",
            packages: [
                {
                    label: "Wholesale",
                    weight: "1kg",
                },
            ],
            applications: [
                "Cafés",
                "Restaurants",
            ],
            featured: false,
            available: true,
        },
    ];