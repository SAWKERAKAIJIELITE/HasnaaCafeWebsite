import type { ContactRequest, ContactResponse, } from "@/types/contact";


export class ContactApi
{
    async send(request: ContactRequest,): Promise<ContactResponse>
    {
        const response = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify(request),
        });

        if (!response.ok)
        {
            return {success: false,message: "Unable to send message.",};
        }

        return response.json();
    }
}

export const contactApi = new ContactApi();