import type { Language, LocalizedText } from "./types";

export function translate(
    value: LocalizedText,
    locale: Language,
): string
{
    return value[locale] ?? value.en;
}