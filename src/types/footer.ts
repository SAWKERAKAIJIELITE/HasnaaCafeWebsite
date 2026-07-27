import type { Icon } from "lucide-astro";

export interface FooterLink
{
    label: string;
    href: string;
}

export interface FooterColumn
{
    title: string;
    links: FooterLink[];
}

export interface ContactItem
{
    label: string;
    value: string;
    href: string;
    icon: Icon;
}

export interface SocialLink
{
    label: string;
    href: string;
    icon: Icon;
}