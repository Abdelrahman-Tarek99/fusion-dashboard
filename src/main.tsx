import { applyInitialThemeAndLang } from "./themeAndLang.ts";
applyInitialThemeAndLang();
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/main.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { appRoutes } from "@/routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={appRoutes} />
    </Provider>
  </StrictMode>
);
