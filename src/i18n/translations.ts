import type { LocalizedText } from "./types";

export const translations =
{
    navbar:
        {
            home:
            {
                en: "Home",
                ar: "الرئيسية",
            },
            about:
            {
                en: "About",
                ar: "من نحن",
            },
            why:
            {
                en: "Why Choose Us",
                ar: "لماذا تختارنا",
            },
            products:
            {
                en: "Products",
                ar: "المنتجات",
            },

            offers:
            {
                en: "Offers",
                ar: "العروض",
            },

            contact:
            {
                en: "Contact",
                ar: "اتصل بنا",
            },
            contactUs:
            {
                en: "Contact Us",
                ar: "تواصل معنا",
            },
        } satisfies Record<string, LocalizedText>,
    roast:
        {
            Light:
            {
                en: "Light",
                ar: "تحميص خفيف"
            },

            Medium:
            {
                en: "Medium",
                ar: "تحميص وسط"
            },

            Dark:
            {
                en: "Dark",
                ar: "تحميص داكن"
            }
        } satisfies Record<string, LocalizedText>,
    productCategory: {
        "coffee-beans": {
            en: "coffee-beans",
            ar: "بن"
        },
        "liquid-coffee": {
            en: "liquid-coffee",
            ar: "قهوة سائلة"
        },
        tea: {
            en: "tea",
            ar: "شاي",
        },
        chocolate: {
            en: "chocolate",
            ar: "شوكولا",
        },
    } satisfies Record<string, LocalizedText>,
    filters: {
        "allRoasts": {
            en: "All Roasts",
            ar: "كل أنواع التحميص"
        },
        "allOrigins": {
            en: "All Origins",
            ar: "كل أنواع المنشأ"
        }
    } satisfies Record<string, LocalizedText>,
};