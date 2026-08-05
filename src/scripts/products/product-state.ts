import type { Product, ProductCategory } from "@/types/product";
import { productRepository } from "@/scripts/products/product-repository";

export class ProductState
{
    // private products: Product[] = [];
    category: ProductCategory = "coffee-beans";
    search = "";
    origin = "all";
    roast = "all";
    featured = null;
    loading = false;
    selected = null;

    // setProducts(products: Product[])
    // {
    //     this.products = products;
    // }

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
        // return [
        //     "all",
        //     ...new Set(productMap[this.category].map(p => p.origin).filter(Boolean).map(origin => localize(origin!)))
        // ];
    }

    async getRoasts()
    {
        return ["all", ...new Set(
            (await productRepository.getCategory(this.category)).map(p => p.roastLevel).filter(Boolean)
        )];
    }

    async getFeatured()
    {
        console.log('products')
        const products = await this.getProducts();

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

    async getProducts()
    {
        let products = await productRepository.getCategory(this.category);

        if (this.search)
        {
            products = products.filter(product =>
            {
                return (
                    product.name.toLowerCase().includes(this.search) ||
                    product.description.toLowerCase().includes(this.search) ||
                    product.origin?.toLowerCase().includes(this.search)
                    // product.applications.some(a =>
                    //     a.toLowerCase().includes(this.search)
                    // )
                    // localize(product.title).toLowerCase().includes(this.search) ||
                    // localize(product.description).toLowerCase().includes(this.search) ||
                    // product.origin && localize(product.origin).toLowerCase().includes(this.search) ||
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

    async getGridProducts()
    {
        return (await this.getProducts()).filter(p => !p.featured);
    }

    async getProduct(id: string)
    {
        return await productRepository.getProduct(id);
    }
}

export const productState = new ProductState();