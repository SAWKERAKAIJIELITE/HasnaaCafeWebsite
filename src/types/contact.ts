export interface WorkingHour
{
    day: string;
    time: string;
}

export interface socials
{
    whatsapp: string;
    facebook: string;
    instagram: string;
    linkedin: string;
}

export interface Contact
{
    title: string;
    subtitle: string;

    phone: string;
    email: string;

    address: string;
    googleMaps: string;

    workingHours: WorkingHour[];

    socials: socials[];
}

export interface ContactRequest
{
    name: string;
    company: string;
    email: string;
    phone: string;
    service: string;
    message: string;
    country: string;
    website?: string; // honeypot
}

export interface ContactResponse
{
    success: boolean;
    message: string;
}