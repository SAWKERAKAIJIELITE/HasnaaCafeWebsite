import type { ContactRequest } from "@/types/contact";


export class ContactState
{
    constructor(private form: HTMLFormElement,) { }

    getData(): ContactRequest
    {
        const formData = new FormData(this.form);

        return {
            name: String(formData.get("name") ?? ""),
            company: String(formData.get("company") ?? ""),
            email: String(formData.get("email") ?? ""),
            phone: String(formData.get("phone") ?? ""),
            service: String(formData.get("service") ?? ""),
            country: String(formData.get("country") ?? ""),
            message: String(formData.get("message") ?? ""),
            website: String(formData.get("website") ?? ""),
        };
    }

    reset()
    {
        this.form.reset();
    }
}