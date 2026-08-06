import { languageStore } from "./language-store";
import type { LocalizedText, Language } from "./types";

export function localize(text: LocalizedText, language: Language): string
{
    // console.log(language);
    // if(cms)
    // {
    //     if (language=='en')
    //         return text.en;
    //     if (language=='ar')
    //         return text.ar;
    // }
    return text[language] ?? text.en;
}