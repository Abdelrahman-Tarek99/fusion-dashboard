import { useAppDispatch, useAppSelector } from "@/store/store";
import { toggleTheme } from "./store/themeSlice/themeSlice";
import { toggleLang } from "@/store/LanguageSlice/LanguageSlice";
import { useTranslation } from "react-i18next";
import { Button } from "./common/components/ui/button";

export default function App() {
  const { t } = useTranslation("");
  const dispatch = useAppDispatch();
  const { theme, language } = useAppSelector((s) => ({
    theme: s.theme,
    language: s.language,
  }));

  return (
    <div className="flex gap-2">
      <Button onClick={() => dispatch(toggleTheme())}>
        {theme === "dark" ? "☀️" : "🌙"}
      </Button>
      <span>{t("common.welcome")}</span>
      <Button onClick={() => dispatch(toggleLang())}>
        {language === "en" ? "AR" : "EN"}
      </Button>
    </div>
  );
}
