import { createBrowserRouter } from "react-router-dom";
import { Dashboard, ErrorPage, SignInPage, SignUpPage } from "@/common/pages";
import { LayoutWithSideBar } from "@/common/wrappers";
import { AppRoutes } from "./AppRoutes";
import { ProtectedRoute } from "@/common/components/ProtectedRoute";

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
        path: "dashboard",
        lazy: async () => {
          const { Dashboard } = await import("@/common/pages");
          return {
            Component: () => (
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            ),
          };
        },
      },
      {
        path: "users",
        lazy: async () => {
          const { Users } = await import("@/common/pages");
          return {
            Component: () => (
              <ProtectedRoute>
                <Users />
              </ProtectedRoute>
            ),
          };
        },
      },
      {
        path: "profile",
        lazy: async () => {
          const { Profile } = await import("@/common/pages");
          return {
            Component: () => (
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            ),
          };
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
