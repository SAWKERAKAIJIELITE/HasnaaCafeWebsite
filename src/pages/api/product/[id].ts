import type { APIRoute } from "astro";

import { getProduct } from "@/services/products/products.service";


export const GET: APIRoute = async ({ params }) =>
{
    const id = params.id;

    if (!id)
    {
        return new Response(
            JSON.stringify({error: "Missing id"}),
            {status: 400,headers: {"Content-Type": "application/json"}}
        );
    }

    const product = await getProduct(id);

    if (!product)
    {
        return new Response(
            JSON.stringify({error: "Not found"}),
            {status: 404,headers: {"Content-Type": "application/json"}}
        );
    }
    return new Response(
        JSON.stringify(product),
        {
            status: 200,
            headers: {"Content-Type": "application/json"}
        }
    );
};