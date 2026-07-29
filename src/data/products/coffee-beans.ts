import type { Product } from "@/types/product";

export const coffeeBeans: Product[] =
    [
        {
            id: "cb-1",
            slug: "premium-arabica",
            category: "coffee-beans",
            title: "Premium Arabica",
            shortDescription: "Carefully selected Arabica beans with a balanced aroma.",
            description: "Premium Arabica beans sourced from high-altitude farms to deliver a smooth, rich, and aromatic cup suitable for cafés, restaurants, and premium retailers.",
            image: "src/assets/demo/photo-1447933601403-0c6688de566e.jpg",
            gallery: [
                "src/assets/demo/photo-1495474472287-4d71bcdd2085.jpg",
                "src/assets/demo/photo-1511920170033-f8396924c348.jpg",
            ],
            origin: "Brazil",
            roastLevel: "Medium",
            packages: [
                {
                    label: "Retail",
                    weight: "250g",
                },
                {
                    label: "Retail",
                    weight: "500g",
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
            image: "src/assets/demo/photo-1459755486867-b55449bb39ff.jpg",
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