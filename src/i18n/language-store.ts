import type { Language } from "./types";


class LanguageStore
{
    private language: Language = "en";

    private listeners = new Set<(language: Language) => void>();

    init()
    {
        const saved = localStorage.getItem("language") as Language | null;

        if (saved === "en" || saved === "ar")
        {
            this.language = saved;
        }

        this.apply();
    }

    getLanguage()
    {
        return this.language;
    }

    setLanguage(language: Language)
    {
        if (language === this.language)
            return;

        this.language = language;

        localStorage.setItem("language", language);

        this.apply();

        this.listeners.forEach(listener => listener(language));

        document.dispatchEvent(new CustomEvent("language:change", {detail: language,}));
    }

    toggle()
    {
        this.setLanguage(this.language === "en"? "ar": "en");
    }

    subscribe(listener: (language: Language) => void)
    {
        this.listeners.add(listener);

        return () => this.listeners.delete(listener);
    }

    private apply()
    {
        document.documentElement.lang = this.language;

        document.documentElement.dir =this.language === "ar"? "rtl": "ltr";

        document.documentElement.dataset.language = this.language;
    }
}

export const languageStore = new LanguageStore();