import { languageStore } from "@/i18n/language-store";

export class LanguageController
{
    private button!: HTMLButtonElement;

    init()
    {
        languageStore.init();

        this.button = document.querySelector("[data-language-toggle]")!;

        this.updateButton();

        this.button.addEventListener("click", () =>
        {
            languageStore.toggle();
            this.updateButton();
        });

        languageStore.subscribe(() =>{this.updateButton();});
    }

    private updateButton()
    {
        this.button.textContent =languageStore.getLanguage() === "en"? "العربية": "English";
    }
}