import type { Product, ProductCategory } from "@/types/product";
import { productRepository } from "@/scripts/products/product-repository";
import { localize } from "@/i18n/localize";


const Dictionaries = {
    roast:
    {
        light:
        {
            en: "Light",
            ar: "تحميص خفيف"
        },
        medium:
        {
            en: "Medium",
            ar: "تحميص وسط"
        },
        dark:
        {
            en: "Dark",
            ar: "تحميص داكن"
        }
    },
    category: {
        "coffee-beans": {
            en: "coffee-beans",
            ar: "بن"
        },
        "liquid-coffee": {
            en: "liquid-coffee",
            ar: "قهوة سائلة"
        },
        tea: {
            en: "tea",
            ar: "شاي",
        },
        chocolate: {
            en: "chocolate",
            ar: "شوكولا",
        },
    },
    filters: {
        "allRoasts": {
            en: "All Roasts",
            ar: "كل أنواع التحميص"
        },
        "allOrigins": {
            en: "All Origins",
            ar: "كل أنواع المنشأ"
        }
    }
}


export class ProductState
{
    category: ProductCategory = "coffee-beans";
    search = "";
    origin = "all";
    roast = "all";
    featured = null;
    loading = false;
    selected = null;

    setSearch(value: string)
    {
        this.search = value.trim().toLowerCase();
        console.log("Search =", this.search);
    }

    setOrigin(origin: string) { this.origin = origin; }
    setRoast(roast: string) { this.roast = roast; }
    setCategory(category: ProductCategory) { this.category = category; }

    getCategory() { return this.category; }
    getOrigin() { return this.origin; }
    getRoast() { return this.roast; }
    getSearch() { return this.search; }

    async getOrigins()
    {
        return ["all", ...new Set(
            (await productRepository.getCategory(this.category)).map(p => p.origin).filter(Boolean)
        )];
    }

    async getRoasts()
    {
        return ["all", ...new Set(
            (await productRepository.getCategory(this.category)).map(p => p.roastLevel).filter(Boolean)
        )];
    }

    async getFeatured(currentLanguage: string)
    {
        const products = await this.getProducts(currentLanguage);

        if (products.length === 0)
        {
            return null;
        }

        return (
            products.find(p => p.featured)
            ?? products[0]
        );
    }

    async getProducts(currentLanguage: string)
    {
        let products = await productRepository.getCategory(this.category);

        if (this.search)
        {
            products = products.filter(product =>
            {
                return (
                    // product.name.toLowerCase().includes(this.search) ||
                    // product.description.toLowerCase().includes(this.search)

                    localize(
                        { ar: product.name, en: product.name_en },
                        currentLanguage
                    )?.toLowerCase().includes(this.search) ||
                    localize(product.description, currentLanguage).toLowerCase().includes(this.search)
                    // product.applications.some(a =>
                    //     localize(translations.productApplication[a]).toLowerCase().includes(this.search)
                    // )
                );
            });
        }
        if (this.origin !== "all")
        {
            products = products.filter(p => p.origin === this.origin);
            // products = products.filter(p => p.origin && localize(p.origin) === this.origin);
        }
        if (this.roast !== "all")
        {
            products = products.filter(p => p.roastLevel === this.roast);
        }

        return products;
    }

    async getGridProducts(currentLanguage: string)
    {
        return (await this.getProducts(currentLanguage)).filter(p => !p.featured);
    }

    async getProduct(id: string)
    {
        return await productRepository.getProduct(id);
    }
}

export const productState = new ProductState();