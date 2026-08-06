import type { Language } from "./types";


class LanguageStore
{
    // private language: Language = "en";
    private language!: Language;

    private listeners = new Set<(language: Language) => void>();

    init()
    {
        const html = document.documentElement;

        const serverLanguage = html.dataset.language as Language;

        this.language = serverLanguage;

        const saved = localStorage.getItem("language") as Language | null;

        if (saved && (saved === "en" || saved === "ar") && saved !== serverLanguage)
        {
            this.setLanguage(saved);
            return
        }

        this.apply();
    }

    isRTL()
    {
        return this.language === "ar";
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

        document.dispatchEvent(new CustomEvent("language:change", { detail: language, }));
    }

    toggle()
    {
        this.setLanguage(this.language === "en" ? "ar" : "en");
    }

    subscribe(listener: (language: Language) => void)
    {
        this.listeners.add(listener);

        return () => this.listeners.delete(listener);
    }

    private apply()
    {
        document.documentElement.lang = this.language;

        document.documentElement.dir = this.language === "ar" ? "rtl" : "ltr";

        document.documentElement.dataset.language = this.language;
    }
}

export const languageStore = new LanguageStore();