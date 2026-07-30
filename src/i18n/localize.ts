import { languageStore } from "./language-store";
import type { LocalizedText } from "./types";

export function localize(text: LocalizedText)
{
    return text[languageStore.getLanguage()];
}