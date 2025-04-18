import { Middleware } from "@reduxjs/toolkit";
import i18n from "i18next";
import { RootState } from "../store";

export const uiMiddleware: Middleware<unknown, RootState> =
  (store) => (next) => (action) => {
    const prevState = store.getState();
    const result = next(action); // let reducers run first
    const state = store.getState();

    /* --- THEME side‑effects -------------------------------------------- */
    if (prevState.theme !== state.theme) {
      document.documentElement.classList.toggle("dark", state.theme === "dark");
      localStorage.setItem("theme", state.theme);
    }

    /* --- LANGUAGE side‑effects ----------------------------------------- */
    if (prevState.language !== state.language) {
      const dir = state.language === "ar" ? "rtl" : "ltr";
      document.documentElement.dir = dir;
      localStorage.setItem("userLanguage", state.language);
      i18n.changeLanguage(state.language).catch(console.error);
    }

    return result;
  };
