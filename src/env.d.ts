/// <reference types="astro/client" />

import type { Language } from "@/i18n/types";

declare namespace App
{
    interface Locals
    {
        language: Language;
    }
}