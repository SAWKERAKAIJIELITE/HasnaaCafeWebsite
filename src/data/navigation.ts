export interface NavigationItem
{
    label: string;
    href: string;
}

export const navigation: NavigationItem[] = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Products", href: "#products" },
    { label: "Gallery", href: "#gallery" },
    { label: "Partners", href: "#partners" },
    { label: "Contact", href: "#contact" },
];