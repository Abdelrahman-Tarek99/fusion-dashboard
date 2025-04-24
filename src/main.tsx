import { applyInitialThemeAndLang } from "./themeAndLang.ts";
applyInitialThemeAndLang();
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@/main.css";
import { Provider } from "react-redux";
import { store } from "./store/store.ts";
import { RouterProvider } from "react-router-dom";
import { AppRoutes, appRoutes } from "@/common/routes";
import { ClerkProvider } from "@clerk/clerk-react";
import { ErrorBoundary } from "@/common/wrappers";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary>
      <Provider store={store}>
        <ClerkProvider
          publishableKey={PUBLISHABLE_KEY}
          afterSignOutUrl={AppRoutes.signIn}
        >
          <RouterProvider router={appRoutes} />
        </ClerkProvider>
      </Provider>
    </ErrorBoundary>
  </StrictMode>
);
