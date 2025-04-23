import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, SignInPage, SignUpPage } from "@/common/pages";
import { LayoutWithSideBar, ProtectedRoute } from "@/common/wrappers";
import { AppRoutes } from "./AppRoutes";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <LayoutWithSideBar />
      </ProtectedRoute>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        index: true, // This makes it render at the root path
        element: <Dashboard />,
      },

      {
        path: AppRoutes.dashboard,
        lazy: async () => {
          const { Dashboard } = await import("@/common/pages");
          return { Component: Dashboard };
        },
      },
      {
        path: AppRoutes.users,
        lazy: async () => {
          const { Users } = await import("@/common/pages");
          return { Component: Users };
        },
      },
      {
        path: AppRoutes.dashboard,
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
