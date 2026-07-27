import type { ImageMetadata } from "astro";

export interface ProductCategory
{
    id: number;

    name: string;

    slug: string;

    description: string;

    image: ImageMetadata;

    featured: boolean;

    order: number;
}