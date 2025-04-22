import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, SignInPage, SignUpPage } from "@/common/pages";
import { LayoutWithSideBar } from "@/common/wrappers";
import { AppRoutes } from "./AppRoutes";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <LayoutWithSideBar />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes it render at the root path
        element: <Dashboard />,
      },

      {
        path: "dashboard",
        lazy: async () => {
          const { Dashboard } = await import("@/common/pages");
          return { Component: Dashboard };
        },
      },
      {
        path: "users",
        lazy: async () => {
          const { Users } = await import("@/common/pages");
          return { Component: Users };
        },
      },
      {
        path: "profile",
        lazy: async () => {
          const { Profile } = await import("@/common/pages");
          return { Component: Profile };
        },
      },
    ],
  },
  {
    path: AppRoutes.signIn,
    Component: SignInPage,
  },
  {
    path: AppRoutes.signup,
    Component: SignUpPage,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
