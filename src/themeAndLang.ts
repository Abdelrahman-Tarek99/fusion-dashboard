// src/bootstrap/themeAndLang.ts

export function applyInitialThemeAndLang() {
  const lang = localStorage.getItem("userLanguage") ?? "en";
  const theme =
    localStorage.getItem("theme") ??
    (window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light");

  document.documentElement.lang = lang;
  document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
}
