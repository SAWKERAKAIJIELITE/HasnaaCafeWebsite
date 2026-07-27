import type { Feature } from "@/types/feature";
import { Coffee, Truck, ShieldCheck, Handshake } from "lucide-astro";


export const features: Feature[] = [
    {
        id: 1,
        icon: Coffee,
        title: "Premium Coffee Selection",
        description: "Carefully sourced coffee products chosen for exceptional flavor and consistent quality.",
    },

    {
        id: 2,
        icon: Truck,
        title: "Reliable Distribution",
        description: "Efficient delivery and dependable logistics that keep your business supplied.",
    },

    {
        id: 3,
        icon: ShieldCheck,
        title: "Quality Assurance",
        description: "Strict quality standards ensure every product meets professional expectations.",
    },

    {
        id: 4,
        icon: Handshake,
        title: "Long-Term Partnership",
        description: "We focus on building lasting relationships through trust, service, and support.",
    },
];