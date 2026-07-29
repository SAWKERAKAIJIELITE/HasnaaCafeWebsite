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
                ar: "شقراء"
            },

            Medium:
            {
                en: "Medium",
                ar: "وسط"
            },

            Dark:
            {
                en: "Dark",
                ar: "سمراء"
            }
        } satisfies Record<string, LocalizedText>,
    productApplication: {
        Retail: {
            en:"Retail",
            ar:"المفرق"
        },
        Hotels: {
            en:"Hotels",
            ar:"الفنادق"
        },
        Restaurants: {
            en:"Restaurants",
            ar:"المطاعم",
        },
        Cafés: {
            en:"Cafés",
            ar:"المقاهي",
        },
        Wholesale: {
            en:"Wholesale",
            ar:"الجملة",
        },
        Office: {
            en:"Office",
            ar:"المكاتب",
        },
    } satisfies Record<string, LocalizedText>
};