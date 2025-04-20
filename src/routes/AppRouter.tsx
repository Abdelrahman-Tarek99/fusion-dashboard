import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../pages/ErrorPage";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "dashboard",
        lazy: async () => {
          const { default: Dashboard } = await import("@/pages/Dashboard");
          return { Component: Dashboard };
        },
      },
      {
        path: "users",
        lazy: async () => {
          const { default: Profile } = await import("@/pages/Profile");
          return { Component: Profile };
        },
      },
      {
        path: "profile",
        lazy: async () => {
          const { default: Profile } = await import("@/pages/Profile");
          return { Component: Profile };
        },
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
