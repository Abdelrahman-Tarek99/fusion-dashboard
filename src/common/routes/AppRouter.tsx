import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { LazyWithBoundary, ProtectedRoute } from "@/common/wrappers";
import { AppRoutes } from "./AppRoutes";
import { ErrorPage } from "@/common/pages";

const Dashboard = lazy(() =>
  import("@/common/pages/dashboard/Dashboard").then((module) => ({
    default: module.Dashboard,
  }))
);
const Users = lazy(() =>
  import("@/common/pages/users/Users").then((module) => ({
    default: module.Users,
  }))
);
const Profile = lazy(() =>
  import("@/common/pages/profile/Profile").then((module) => ({
    default: module.Profile,
  }))
);
const SignInPage = lazy(() =>
  import("@/common/pages/signIn/SignIn").then((module) => ({
    default: module.SignInPage,
  }))
);
const SignUpPage = lazy(() =>
  import("@/common/pages/signUp/SignUp").then((module) => ({
    default: module.SignUpPage,
  }))
);
const LayoutWithSideBar = lazy(() =>
  import("@/common/wrappers/LayoutWithSideBar").then((module) => ({
    default: module.LayoutWithSideBar,
  }))
);

export const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: (
      <LazyWithBoundary>
        <ProtectedRoute>
          <LayoutWithSideBar />
        </ProtectedRoute>
      </LazyWithBoundary>
    ),
    children: [
      {
        index: true,
        element: (
          <LazyWithBoundary>
            <Dashboard />
          </LazyWithBoundary>
        ),
      },
      {
        path: AppRoutes.dashboard,
        element: (
          <LazyWithBoundary>
            <Dashboard />
          </LazyWithBoundary>
        ),
      },
      {
        path: AppRoutes.users,
        element: (
          <LazyWithBoundary>
            <Users />
          </LazyWithBoundary>
        ),
      },
      {
        path: AppRoutes.profile,
        element: (
          <LazyWithBoundary>
            <Profile />
          </LazyWithBoundary>
        ),
      },
    ],
  },
  {
    path: AppRoutes.signIn,
    element: (
      <LazyWithBoundary>
        <SignInPage />
      </LazyWithBoundary>
    ),
  },
  {
    path: AppRoutes.signup,
    element: (
      <LazyWithBoundary>
        <SignUpPage />
      </LazyWithBoundary>
    ),
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
