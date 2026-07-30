import type { Product } from "@/types/product";

export const coffeeBeans: Product[] =
    [
        {
            id: "cb-1",
            slug: "premium-arabica",
            category: "coffee-beans",
            title: {
                en:"Premium Arabica",
                ar:"أرابيكا فاخرة"
            },
            shortDescription: {
                en:"Carefully selected Arabica beans with a balanced aroma.",
                ar:"حبوب أرابيكا منتقاة بعناية ذات عبق متوازن"
            },
            description: {
                en:"Premium Arabica beans sourced from high-altitude farms to deliver a smooth, rich, and aromatic cup suitable for cafés, restaurants, and premium retailers.",
                ar:"حبوب أرابيكا فاخرة مستمدة من مزارع تقع على ارتفاعات شاهقة، لتقدم كوباً يتميز بمذاق سلس وغني ونكهة عطرية، مما يجعلها خياراً مثالياً للمقاهي والمطاعم ومتاجر التجزئة الراقية."},
            image: "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
            gallery: [
                "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
                "src/assets/demo/552652030_17986571240907279_2493131455731955691_n.webp",
            ],
            origin: {en:"Brazil",ar:"البرازيل"},
            roastLevel: "Medium",
            packages: [
                {
                    label: {en:"Retail",ar:"المفرق"},
                    weight: "250g",
                },
                {
                    label: { en: "Retail", ar: "المفرق" },
                    weight: "500g",
                },
                {
                    label: { en: "wholesale", ar: "الجملة" },
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