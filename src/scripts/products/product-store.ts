import { productMap } from "@/data/products/index";
import { localize } from "@/i18n/localize";
import { translations } from "@/i18n/translations";
import type { Product, ProductCategory } from "@/types/product";


export class ProductStore
{
    private category: ProductCategory = "coffee-beans";

    private search = "";

    private origin = "all";

    private roast = "all";

    setSearch(value: string)
    {
        this.search = value.trim().toLowerCase();
        console.log("Search =", this.search);
    }

    setOrigin(origin: string)
    {
        this.origin = origin;
    }

    setRoast(roast: string)
    {
        this.roast = roast;
    }

    getCategory()
    {
        return this.category;
    }

    setCategory(category: ProductCategory)
    {
        this.category = category;
    }

    getProducts(): Product[]
    {
        // return productMap[this.category];
        let products = [...productMap[this.category]];

        if (this.search)
        {
            products = products.filter(product =>
            {
                return (
                    localize(product.title).toLowerCase().includes(this.search) ||
                    localize(product.description).toLowerCase().includes(this.search) ||
                    product.origin && localize(product.origin).toLowerCase().includes(this.search) ||
                    product.applications.some(a =>
                        localize(translations.productApplication[a]).toLowerCase().includes(this.search)
                    )
                );
            });
        }

        if (this.origin !== "all")
        {
            products = products.filter(p => p.origin && localize(p.origin) === this.origin);
        }

        if (this.roast !== "all")
        {
            products = products.filter(p => p.roastLevel === this.roast);
        }

        return products;
    }

    getOrigins()
    {
        return [
            "all",
            ...new Set(productMap[this.category].map(p => p.origin).filter(Boolean).map(origin => localize(origin!)))
        ];
    }

    getRoasts()
    {
        return ["all", ...new Set(productMap[this.category].map(p => p.roastLevel)),];
    }

    getProduct(id: string)
    {
        return Object.values(productMap).flat().find(product => product.id === id);
    }

    getFeatured(): Product | null
    {
        const products = this.getProducts();

        if (products.length === 0)
        {
            return null;
        }

        return (
            products.find(p => p.featured)
            ?? products[0]
        );
        // return (this.getProducts().find(p => p.featured) ?? this.getProducts()[0]);
    }

    getGridProducts(): Product[]
    {
        return this.getProducts().filter(p => !p.featured);
    }
}

export const productStore = new ProductStore();