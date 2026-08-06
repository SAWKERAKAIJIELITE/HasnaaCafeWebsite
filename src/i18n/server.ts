import type { APIContext } from "astro";
import type { Language, LocalizedText } from "./types";


export function getLanguage(context: APIContext): Language
{
    return context.locals.language as Language;
}

export function t(context: APIContext,value: LocalizedText): string
{
    return value[getLanguage(context)] ?? value.en;
}