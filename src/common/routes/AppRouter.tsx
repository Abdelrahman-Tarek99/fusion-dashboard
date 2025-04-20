import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage } from "@/common/pages";

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    errorElement: <ErrorPage />,
    children: [
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
    path: "*",
    element: <ErrorPage />,
  },
]);
