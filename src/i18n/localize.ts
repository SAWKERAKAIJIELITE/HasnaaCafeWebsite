import { languageStore } from "./language-store";
import type { LocalizedText } from "./types";

export function t(text: LocalizedText)
{
    return text[languageStore.getLanguage()];
}