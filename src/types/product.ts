import type { LocalizedText } from "@/i18n/types";

export type ProductCategory =
    | "coffee-beans"
    | "liquid-coffee"
    | "tea"
    | "chocolate";

export type RoastLevel =
    | "Light"
    | "Medium"
    | "Dark";

export type ProductApplication =
    | "Retail"
    | "Hotels"
    | "Restaurants"
    | "Cafés"
    | "Wholesale"
    | "Office";

export interface ProductPackage
{
    label: LocalizedText;
    weight: string;
}

export interface Product
{
    id: string;
    slug: string;
    category: ProductCategory;
    title: LocalizedText;
    shortDescription: LocalizedText;
    description: LocalizedText;
    image: string;
    gallery: string[];
    origin?: LocalizedText;
    roastLevel?: RoastLevel;
    packages: ProductPackage[];
    applications: ProductApplication[];
    featured: boolean;
    available: boolean;
}