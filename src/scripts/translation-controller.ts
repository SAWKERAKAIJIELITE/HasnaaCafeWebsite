import { languageStore } from "@/i18n/language-store";
import { translations } from "@/i18n/translations";


export class TranslationController
{
    private elements: HTMLElement[] = [];

    init()
    {
        this.elements = [...document.querySelectorAll<HTMLElement>("[data-i18n]")];

        this.translate();

        languageStore.subscribe(() =>{this.translate();});
    }

    private translate()
    {
        const language = languageStore.getLanguage();

        this.elements.forEach(element =>
        {
            const key = element.dataset.i18n;

            if (!key)
                return;

            const parts = key.split(".");

            let value: any = translations;

            for (const part of parts)
            {
                value = value?.[part];
            }

            if (!value)
                return;

            element.textContent = value[language];
        });
    }
}