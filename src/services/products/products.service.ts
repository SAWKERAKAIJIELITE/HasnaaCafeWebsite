import { getCollection } from "astro:content";
import type { Product, ProductSummary } from "@/types/product";
import type { CollectionEntry } from "astro:content";


export async function getProduct(id: string)
{
    const entries = await getCollection("products");
    const product = entries.find(p => p.id === id);
    if (!product)
    {
        return null;
    }
    return mapProduct(product);
}

export async function getFeaturedProduct(category: string)
{
    const entries = (await getProductsByCategory(category)).filter(p => p.featured)
    if (entries.length === 0)
        return null;
    return entries[0]
}

export async function getProductsByCategory(category: string)
{
    const entries = await getCollection("products", p => p.data.category === category);
    return entries.map(mapProductSummary);
}

export async function getProducts(): Promise<Product[]>
{
    const products = await getCollection("products");
    if (!products)
    {
        throw new Error("Products collection not found.");
    }
    return products.map(mapProduct);;
}

export function mapProduct(entry: CollectionEntry<"products">): Product
{
    return {
        id: entry.id,
        name: entry.data.name,
        name_en: entry.data.name_en,
        category: entry.data.category,
        description: entry.data.description,
        thumbnail: entry.data.thumbnail,
        gallery: entry.data.gallery,
        origin: entry.data.origin,
        roastLevel: entry.data.roastLevel,
        packaging: entry.data.packaging,
        featured: entry.data.featured,
        available: entry.data.available,
        specifications: entry.data.specifications,
        flavor: entry.data.flavor,
    };
}

export function mapProductSummary(entry: CollectionEntry<"products">): ProductSummary
{
    return {
        id: entry.id,
        name: entry.data.name,
        name_en: entry.data.name_en,
        category: entry.data.category,
        description: entry.data.description,
        thumbnail: entry.data.thumbnail,
        featured: entry.data.featured,
        flavor: entry.data.flavor,
        origin: entry.data.origin,
        roastLevel: entry.data.roastLevel,
    };
}