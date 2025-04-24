import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes } from "@/common/routes";
import { RouteLoader } from "@/common/components";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return <RouteLoader />;
  }

  if (!isSignedIn) {
    // Redirect to login but save the attempted location
    return (
      <Navigate to={AppRoutes.signIn} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};
