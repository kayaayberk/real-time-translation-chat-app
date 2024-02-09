import { create } from "zustand";
import { Subscription } from "@/types/Subscription";

export type LanguagesSupported =
  | "en"
  | "pl"
  | "de"
  | "fr"
  | "es"
  | "tr"
  | "hi"
  | "ja"
  | "la"
  | "ru"
  | "zh";

export const LanguagesSupportedMap: Record<LanguagesSupported, string> = {
  en: "English",
  pl: "Polish",
  de: "German",
  fr: "French",
  es: "Spanish",
  tr: "Turkish",
  hi: "Hindi",
  ja: "Japanese",
  la: "Latin",
  ru: "Russian",
  zh: "Manadarin",
};

const LANGUAGES_IN_FREE = 2;

interface LanguageState {
  language: LanguagesSupported;
  setLanguage: (language: LanguagesSupported) => void;
  getLanguages: (isPro: boolean) => LanguagesSupported[];
  getNotSupportedLanguages: (isPro: boolean) => LanguagesSupported[];
}

export const useLanguageStore = create<LanguageState>()((set, get) => ({
  language: "en",
  setLanguage: (language: LanguagesSupported) => set({ language }),
  getLanguages: (isPro: boolean) => {
    // If user is pro, return all supported languages
    if (isPro)
      return Object.keys(LanguagesSupportedMap) as LanguagesSupported[];

    // If user is not pro, return only the first 2 supported languages
    return Object.keys(LanguagesSupportedMap).slice(
      0,
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[];
  },
  getNotSupportedLanguages: (isPro: boolean) => {
    if (isPro) return []; // No supported languages for "pro" users

    return Object.keys(LanguagesSupportedMap).slice(
      LANGUAGES_IN_FREE
    ) as LanguagesSupported[];
  },
}));

interface SubscriptionState {
  subscription: Subscription | null | undefined;
  setSubscription: (subscription: Subscription | null) => void;
}

export const useSubscriptionStore = create<SubscriptionState>((set) => ({
  subscription: undefined,
  setSubscription: (subscription: Subscription | null) => set({ subscription }),
}));
