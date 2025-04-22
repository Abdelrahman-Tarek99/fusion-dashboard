import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes } from "@/common/routes";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isSignedIn, isLoaded } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    return null; // Or a loading spinner
  }

  if (!isSignedIn) {
    // Redirect to login but save the attempted location
    return (
      <Navigate to={AppRoutes.signIn} state={{ from: location }} replace />
    );
  }

  return <>{children}</>;
};
