import type { APIRoute } from "astro";


export const POST: APIRoute = async ({ request, cookies }) =>
{
    const { language } = await request.json();

    if (language !== "en" && language !== "ar")
    {
        return new Response(null, { status: 400 });
    }

    cookies.set("language", language, {
        path: "/",
        sameSite: "lax",
        httpOnly: false,
        secure: import.meta.env.PROD,
        maxAge: 60 * 60 * 24 * 365,
    });

    return new Response(null, { status: 204 });
};