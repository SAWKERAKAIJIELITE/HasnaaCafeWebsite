import { languageStore } from "@/i18n/language-store";


// export class LanguageController
// {
//     private button!: HTMLButtonElement;

//     init()
//     {
//         languageStore.init();

//         this.button = document.querySelector("[data-language-toggle]")!;

//         this.updateButton();

//         this.button.addEventListener("click", () =>
//         {
//             languageStore.toggle();
//             this.updateButton();
//         });

//         languageStore.subscribe(() =>{this.updateButton();});
//     }

//     private updateButton()
//     {
//         this.button.textContent =languageStore.getLanguage() === "en"? "العربية": "English";
//     }
// }


export class LanguageController
{
    private button!: HTMLButtonElement;

    init()
    {
        this.button = document.querySelector("[data-language-toggle]")!;

        if (!this.button) return;

        this.button.addEventListener("click", async () =>
        {
            const current =document.documentElement.lang === "ar"? "ar": "en";

            const next = current === "en"? "ar": "en";

            await fetch("/api/language", {
                method: "POST",
                headers: {"Content-Type": "application/json",},
                body: JSON.stringify({language: next,}),
            });

            location.reload();
        });
    }
}