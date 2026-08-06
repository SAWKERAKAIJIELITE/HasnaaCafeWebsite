import { defineMiddleware } from "astro:middleware";
import { DEFAULT_LOCALE, SUPPORTED_LOCALES, } from "@/i18n/locale";


export const onRequest = defineMiddleware((context, next) =>
{
    const cookie = context.cookies.get("language")?.value;

    context.locals.language = cookie && SUPPORTED_LOCALES.includes(cookie as any) ? cookie as any : DEFAULT_LOCALE;

    return next();
},
);