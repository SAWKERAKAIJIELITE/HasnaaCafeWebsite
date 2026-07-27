import {Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-astro";
import type {FooterColumn, ContactItem, SocialLink } from "@/types/footer";

export const footerDescription = "Delivering premium coffee solutions with quality, innovation and trusted partnerships.";

export const footerColumns: FooterColumn[] = [
    {
        title: "Company",
        links: [
            { label: "About", href: "#about" },
            { label: "Products", href: "#products" },
            { label: "Why Choose Us", href: "#why-us" },
            { label: "Contact", href: "#contact" },
        ],
    },
    {
        title: "Products",
        links: [
            { label: "Coffee Beans", href: "#" },
            { label: "Machines", href: "#" },
            { label: "Accessories", href: "#" },
        ],
    },
];

export const contactItems: ContactItem[] = [
    {
        label: "Phone",
        value: "+964 xxx xxx xxxx",
        href: "tel:+964xxxxxxxx",
        icon: Phone,
    },
    {
        label: "Email",
        value: "info@hasnaa.com",
        href: "mailto:info@hasnaa.com",
        icon: Mail,
    },
    {
        label: "Address",
        value: "Damascus, Syria",
        href: "#",
        icon: MapPin,
    },
];

export const socialLinks: SocialLink[] = [
    {
        label: "Facebook",
        href: "#",
        icon: Facebook,
    },
    {
        label: "Instagram",
        href: "#",
        icon: Instagram,
    },
    {
        label: "LinkedIn",
        href: "#",
        icon: Linkedin,
    },
];

// export const footer = {

//     description: "Delivering premium coffee products and reliable solutions for cafés, restaurants, hotels, and retailers.",

//     company: [

//     ],

//     products: [

//     ],

//     social: [

//     ],

//     contact: {

//     }

// }