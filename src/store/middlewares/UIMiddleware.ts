import { i18n } from "@/Locals";
import type { Middleware } from "@reduxjs/toolkit";

export const uiMiddleware: Middleware = (store) => (next) => (action) => {
  const prevState = store.getState();
  const result = next(action);
  const state = store.getState();

  // THEME
  if (prevState.theme !== state.theme) {
    document.documentElement.classList.toggle("dark", state.theme === "dark");
    localStorage.setItem("theme", state.theme);
  }

  // LANGUAGE
  if (prevState.language !== state.language) {
    const dir = state.language === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    localStorage.setItem("userLanguage", state.language);
    i18n.changeLanguage(state.language).catch(console.error);
  }

  return result;
};
