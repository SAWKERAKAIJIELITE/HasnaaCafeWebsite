import type { ContactRequest } from "@/types/contact";

export interface ValidationResult
{
    valid: boolean;
    errors: Partial<Record<keyof ContactRequest, string>>;
}

const EMAIL =/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const PHONE =/^[0-9+\-() ]{6,25}$/;

export function validateContact(data: ContactRequest,): ValidationResult
{
    const errors: ValidationResult["errors"] = {};

    // Honeypot
    if (data.website?.trim())
    {
        errors.website = "Spam detected.";
    }

    if (!data.name.trim())
    {
        errors.name = "Please enter your name.";
    }
    else if (data.name.length > 100)
    {
        errors.name = "Name is too long.";
    }

    if (!data.company.trim())
    {
        errors.company = "Please enter your company.";
    }

    if (!EMAIL.test(data.email))
    {
        errors.email = "Please enter a valid email.";
    }

    if (data.phone.trim() && !PHONE.test(data.phone))
    {
        errors.phone = "Invalid phone number.";
    }

    if (!data.service.trim())
    {
        errors.service = "Please enter a service.";
    }

    if (!data.country.trim())
    {
        errors.country = "Please enter a country.";
    }

    if (!data.message.trim())
    {
        errors.message = "Please enter a message.";
    }
    else if (data.message.length < 20)
    {
        errors.message = "Message is too short.";
    }
    else if (data.message.length > 3000)
    {
        errors.message = "Message is too long.";
    }

    return {
        valid: Object.keys(errors).length === 0,
        errors,
    };
}