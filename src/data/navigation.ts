export interface NavigationItem
{
    label: string;
    href: string;
    data_i18n: string;
}

export const navigation: NavigationItem[] = [
    { label: "Home", href: "#home", data_i18n: "navbar.home" },
    { label: "About", href: "#about", data_i18n: "navbar.about" },
    { label: "Why Choose Us", href: "#why-us", data_i18n: "navbar.why" },
    { label: "Products", href: "#products", data_i18n: "navbar.products" },
    { label: "Offers", href: "#offers", data_i18n: "navbar.offers" },
    { label: "Contact", href: "#contact", data_i18n: "navbar.contact" },
];