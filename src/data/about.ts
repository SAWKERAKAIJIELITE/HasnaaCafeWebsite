import aboutImage from "@/assets/demo/photo-1495474472287-4d71bcdd2085.jpg";
import chairman from "@/assets/demo/chairman.jpg";
import signature from "@/assets/demo/signature.png";
import {Eye, Target, Gem } from "lucide-astro";
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
    title: "Passionate About Exceptional Coffee",
    description: "Hasnaa Coffee is dedicated to delivering premium coffee products and reliable solutions for cafés, restaurants, hotels, and retailers. Through quality, innovation, and trusted partnerships, we help businesses create memorable coffee experiences.",
    image: aboutImage,
    foundation: [
        {
            title: "Vision",
            icon: Eye,
            description: "To become the region's most trusted partner for premium coffee solutions, recognized for quality, innovation, and long-term relationships.",
        },
        {
            title: "Mission",
            icon: Target,
            description: "To provide outstanding coffee products and dependable service while helping our customers grow their businesses with confidence.",
        },
        {
            title: "Core Values",
            icon: Gem,
            values: [
                "Quality",
                "Integrity",
                "Innovation",
                "Partnership",
                "Customer Success",
            ],
        },
    ],
    features: [
        "Premium Coffee Beans",
        "Professional Equipment",
        "Nationwide Distribution",
        "Dedicated Customer Support",
    ],
    button: {label: "Learn More",href: "#products",},
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
        {
            value: 120,
            suffix: "+",
            label: "Coffee Products",
        },
    ],
    chairman: {
        name: "Chairman's Name",
        title: "Chairman & Founder",
        photo: chairman,
        signature: signature,
        quote: "Every great partnership begins with trust. Our promise is to deliver exceptional coffee solutions while building lasting relationships founded on quality, consistency and integrity."
    }
};