import { configureStore, Middleware } from "@reduxjs/toolkit";
import theme from "./themeSlice/themeSlice";
import language from "./LanguageSlice/LanguageSlice";
import { uiMiddleware } from "./middlewares/UIMiddleware";
import { i18n } from "../Locals/i18n";
import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "@/store/types";

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const initialLang =
  (localStorage.getItem("userLanguage") as "en" | "ar") ?? "en";
const initialTheme =
  (localStorage.getItem("theme") as "light" | "dark") ?? "light";

// change it globally
i18n.changeLanguage(initialLang);
document.documentElement.dir = initialLang === "ar" ? "rtl" : "ltr";

/* preset preloadedState so slices start with the same values */
export const store = configureStore({
  reducer: { theme, language },
  preloadedState: {
    theme: initialTheme,
    language: initialLang,
  },
  middleware: (getDefault) => getDefault().concat(uiMiddleware as Middleware), // <‑‑ registers our middleware
});
