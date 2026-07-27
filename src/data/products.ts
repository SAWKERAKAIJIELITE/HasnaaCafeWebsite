import beans from "@/assets/products/beans.jpg";
import machines from "@/assets/products/machines.jpg";
import capsules from "@/assets/products/capsules.jpg";
import accessories from "@/assets/products/accessories.jpg";

import type { ProductCategory } from "@/types/product";

export const productCategories: ProductCategory[] = [

    {
        id: 1,
        name: "Coffee Beans",
        slug: "coffee-beans",
        description: "Premium roasted beans crafted for cafés, restaurants, and coffee professionals.",
        image: beans,
        featured: true,
        order: 1,
    },
    {
        id: 2,
        name: "Coffee Machines",
        slug: "coffee-machines",
        description: "Commercial coffee equipment built for reliability and exceptional performance.",
        image: machines,
        featured: true,
        order: 2,
    },
    {
        id: 3,
        name: "Coffee Capsules",
        slug: "coffee-capsules",
        description: "Convenient premium capsules delivering consistent flavor in every cup.",
        image: capsules,
        featured: true,
        order: 3,
    },
    {
        id: 4,
        name: "Accessories",
        slug: "accessories",
        description: "Everything needed to complete a professional coffee experience.",
        image: accessories,
        featured: true,
        order: 4,
    },

];