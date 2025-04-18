import { useAppDispatch, useAppSelector } from "@/store/store";
import { toggleTheme } from "./store/themeSlice/themeSlice";
import { toggleLang } from "@/store/LanguageSlice/LanguageSlice";

export default function App() {
  const dispatch = useAppDispatch();
  const { theme, language } = useAppSelector((s) => ({
    theme: s.theme,
    language: s.language,
  }));

  return (
    <div className="flex gap-2">
      <button onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <button onClick={() => dispatch(toggleLang())}>
        {language === "en" ? "AR" : "EN"}
      </button>
    </div>
  );
}
