import type { Language } from "./types";

export const DEFAULT_LOCALE: Language = "en";

export const SUPPORTED_LOCALES: Language[] = [
    "en",
    "ar",
];

export function isLocale(value: string): value is Language
{
    return SUPPORTED_LOCALES.includes(value as Language);
}