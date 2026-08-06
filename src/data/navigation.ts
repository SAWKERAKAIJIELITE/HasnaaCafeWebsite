import type { LocalizedText } from "src/i18n/types";


export interface NavigationItem
{
    label: LocalizedText;
    href: string;
    data_i18n: string;
}

export const navigation: NavigationItem[] = [
    {
        label: { en: "Home", ar: "الرئيسية" }, href: "#home", data_i18n: "navbar.home"
    },
    {
        label: { en: "Offers", ar: "العروض" }, href: "#offers", data_i18n: "navbar.offers"
    },
    {
        label: { en: "About", ar: "من نحن" }, href: "#about", data_i18n: "navbar.about"
    },
    {
        label: { en: "Why Choose Us", ar: "لماذا تختارنا" }, href: "#why-us", data_i18n: "navbar.why"
    },
    {
        label: { en: "Products", ar: "المنتجات" }, href: "#products", data_i18n: "navbar.products"
    },
    {
        label: { en: "Contact", ar: "اتصل بنا" }, href: "#contact", data_i18n: "navbar.contact"
    },
    {
        label: { en: "Articles", ar: "المقالات" }, href: "#news", data_i18n: "navbar.news"
    },
    {
        label: { en: "Employees", ar: "الإدارة" }, href: "#council", data_i18n: "navbar.council"
    },
];