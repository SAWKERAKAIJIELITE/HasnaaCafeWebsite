import type { APIRoute } from "astro";
import { emailService } from "@/lib/email/email.service";


export const POST: APIRoute = async ({ request }) =>
{
    try
    {
        const body = await request.json();
        await emailService.send(body);
        return new Response(JSON.stringify({ success: true }), { status: 200 });
    }
    catch (error)
    {
        console.error(error);

        return new Response(JSON.stringify({ success: false }), { status: 500 });
    }
};