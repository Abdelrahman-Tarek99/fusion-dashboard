import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import english from "./en/en.json";
import arabic from "./ar/ar.json";

export const SUPPORTED_LANGS = ["en", "ar"] as const;
export type Lang = (typeof SUPPORTED_LANGS)[number];

i18n.use(initReactI18next).init({
  lng: "en", // default language
  fallbackLng: "en",
  resources: {
    en: {
      translation: {
        ...english,
      },
    },
    ar: {
      translation: {
        ...arabic,
      },
    },
  },
  interpolation: { escapeValue: false },
});

export { i18n };
