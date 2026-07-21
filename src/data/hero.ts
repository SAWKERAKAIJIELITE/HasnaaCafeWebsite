import hero1 from "@/assets/demo/photo-1447933601403-0c6688de566e.jpg";
import hero2 from "@/assets/demo/photo-1495474472287-4d71bcdd2085.jpg";
import hero3 from "@/assets/demo/photo-1509042239860-f550ce710b93.jpg";

export interface HeroSlide
{
    id: number;
    title: string;
    subtitle: string;
    media: ImageMetadata;
    type: "image" | "video";

    primaryButton: {
        label: string;
        href: string;
    };

    secondaryButton: {
        label: string;
        href: string;
    };
    // image: string;
}

export const heroSlides: HeroSlide[] = [
    {
        id: 1,
        title: "Premium Coffee Solutions",
        subtitle:
            "Delivering exceptional coffee products with quality, innovation, and passion.",
        type: "image",
        media:
            hero1,
        primaryButton: {
            label: "Explore Products",
            href: "#products",
        },
        secondaryButton: {
            label: "Contact Us",
            href: "#contact",
        }
    },
    {
        id: 2,
        title: "Freshly Roasted Every Day",
        subtitle:
            "We deliver premium coffee beans for cafés, restaurants and retailers.",
        type: "image",
        media:
            hero2,
        primaryButton: {
            label: "View Products",
            href: "#products",
        },
        secondaryButton: {
            label: "Learn More",
            href: "#about",
        },
    },

    {
        id: 3,
        title: "Trusted By Coffee Professionals",
        subtitle:
            "Helping businesses create exceptional coffee experiences.",
        type: "image",
        media:
            hero3,
        primaryButton: {
            label: "Our Story",
            href: "#about",
        },
        secondaryButton: {
            label: "Contact",
            href: "#contact",
        },
    },
];