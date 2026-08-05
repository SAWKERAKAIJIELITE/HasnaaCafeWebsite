import type { APIRoute } from "astro";

import { getProductsByCategory } from "@/services/products/products.service";


export const GET: APIRoute = async ({ url }) =>
{
    const category = url.searchParams.get("category");

    if (!category)
    {
        return new Response(
            JSON.stringify({ error: "Missing category" }),
            {
                status: 400,
                headers: { "Content-Type": "application/json" }
            }
        );
    }

    const products = await getProductsByCategory(category);

    return new Response(
        JSON.stringify(products),
        {
            status: 200,
            headers: { "Content-Type": "application/json" }
        }
    );
};