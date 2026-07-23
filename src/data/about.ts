import aboutImage from "@/assets/demo/photo-1495474472287-4d71bcdd2085.jpg";

import type { ImageMetadata } from "astro";

export interface AboutData
{
    eyebrow: string;
    title: string;
    description: string;

    image: ImageMetadata;

    features: string[];

    button: {
        label: string;
        href: string;
    };

    stats: { value: number; suffix?: string; label: string; }[];
}

export const about: AboutData = {
    eyebrow: "ABOUT US",

    title: "Delivering Premium Coffee Experiences Since 2010",

    description: "We partner with cafés, restaurants, hotels and retailers to supply carefully selected coffee products with consistent quality and exceptional service.",

    image: aboutImage,

    features: [
        "Premium Coffee Beans",
        "Professional Equipment",
        "Nationwide Distribution",
        "Dedicated Customer Support",
    ],

    button: {
        label: "Learn More",
        href: "#products",
    },

    stats: [
        {
            value: 15,
            suffix: "+",
            label: "Years Experience",
        },
        {
            value: 500,
            suffix: "+",
            label: "Business Clients",
        },
    ],
};