import { useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";
import { AppRoutes } from "@/common/routes";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { isLoaded, isSignedIn } = useAuth();
  const location = useLocation();

  if (!isLoaded) {
    // You can show a loading spinner here
    return <div>Loading...</div>;
  }

  if (!isSignedIn) {
    // Redirect to sign-in page but save the attempted location
    return <Navigate to={AppRoutes.signIn} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}; 