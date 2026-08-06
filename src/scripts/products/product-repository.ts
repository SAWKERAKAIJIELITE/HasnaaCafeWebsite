import type { Product, ProductCategory, ProductSummary } from "@/types/product";


export class ProductRepository
{
    private categoryCache = new Map<ProductCategory, ProductSummary[]>();

    private detailsCache = new Map<string, Product>();

    async getCategory(category: ProductCategory): Promise<ProductSummary[]>
    {
        const cached = this.categoryCache.get(category);
        // if (cached)
        // {
        //     return cached;
        // }

        const response = await fetch(`/api/products?category=${category}`);
        if (!response.ok)
        {
            throw new Error("Failed to load category");
        }

        const products: ProductSummary[] = await response.json();

        this.categoryCache.set(category, products);

        return products;
    }

    async getProduct(id: string): Promise<Product>
    {
        const cached = this.detailsCache.get(id);
        if (cached)
        {
            return cached;
        }

        const response = await fetch(`/api/product/${id}`);

        if (!response.ok)
        {
            throw new Error("Failed to load product");
        }

        const product: Product = await response.json();

        this.detailsCache.set(id, product);

        return product;
    }

    clearCategory(category: ProductCategory)
    {
        this.categoryCache.delete(category);
    }

    clearAll()
    {
        this.categoryCache.clear();
        this.detailsCache.clear();
    }
}

export const productRepository = new ProductRepository();