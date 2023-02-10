import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import { en, ru } from "./translations";

export const AvailbaleLanguages = {
  ...ru,
  ...en,
};

export type AvailableLanguagesType = keyof typeof AvailbaleLanguages;

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    fallbackLng: "en",
    debug: true,
    resources: {
      ...AvailbaleLanguages,
    },
  });

export const changeLanguage = (lang: AvailableLanguagesType) => {
  i18n.changeLanguage(lang);
};

export default i18n;
