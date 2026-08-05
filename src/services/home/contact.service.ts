import { getEntry } from "astro:content";
import type { Contact } from "@/types/contact";

class ContactRepository
{
    async get(): Promise<Contact>
    {
        const entry = await getEntry("contact", "contact");

        if (!entry) throw new Error("Contact content not found.");

        return entry.data as Contact;
    }
}

export const contactRepository = new ContactRepository();