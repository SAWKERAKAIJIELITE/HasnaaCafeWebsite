import type { LocalizedText } from "@/i18n/types";

export type ProductCategory =
    | "coffee-beans"
    | "liquid-coffee"
    | "tea"
    | "chocolate"
    | "instant-coffee";

export type RoastLevel =
    | "light"
    | "medium"
    | "dark";

export interface ProductPackage
{
    amount: number;
    unit: string;
}

export interface Specifications
{
    name: number;
    value: string;
}

export interface Product
{
    id: string;
    category: ProductCategory;
    name: string;
    name_en:string;
    description: string;
    thumbnail: string;
    gallery: string[];
    origin?: string;
    roastLevel?: RoastLevel;
    packaging: ProductPackage[];
    flavor?: string[];
    specifications?: Specifications[];
    featured: boolean;
    available: boolean;
}

export interface ProductSummary
{
    id: string;
    name: string;
    name_en: string;
    category: ProductCategory;
    description: string;
    thumbnail: string;
    featured: boolean;
    flavor?: string[];
    origin?: string;
    roastLevel?: RoastLevel;
}