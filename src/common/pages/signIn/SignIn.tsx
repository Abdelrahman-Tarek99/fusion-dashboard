import { Skeleton } from "@/common/components";
import { AppRoutes } from "@/common/routes";
import { BackgroundWrapper } from "@/common/wrappers";
import { ClerkLoading, SignIn, useAuth } from "@clerk/clerk-react";
import { Navigate, useLocation } from "react-router-dom";

export const SignInPage = () => {
  const { isSignedIn } = useAuth();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // If already signed in, redirect to the intended destination
  if (isSignedIn) {
    return <Navigate to={from} replace />;
  }

  return (
    <BackgroundWrapper>
      <SignIn
        forceRedirectUrl={from}
        routing="path"
        path={AppRoutes.signIn}
        signUpUrl={AppRoutes.signup}
        appearance={{
          elements: {
            formButtonPrimary:
              "bg-primary text-primary-foreground hover:bg-primary/90",
            card: "bg-background/80 backdrop-blur-sm border-border shadow-xl",
            headerTitle: "text-foreground",
            headerSubtitle: "text-muted-foreground",
            socialButtonsBlockButton:
              "bg-background text-foreground border-border hover:bg-muted",
            formFieldLabel: "text-foreground",
            formFieldInput:
              "bg-background text-foreground border-input focus:ring-0 focus:ring-ring",
            dividerLine: "bg-border",
            dividerText: "text-muted-foreground",
            footerActionLink: "text-primary hover:text-primary",
          },
        }}
      />
      <ClerkLoading>
        <Skeleton className="h-[400px] w-[350px] rounded-xl bg-muted" />
      </ClerkLoading>
    </BackgroundWrapper>
  );
};
