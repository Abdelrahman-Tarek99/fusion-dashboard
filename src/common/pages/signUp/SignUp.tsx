import { Skeleton } from "@/common/components";
import { AppRoutes } from "@/common/routes";
import { ClerkLoading, SignUp } from "@clerk/clerk-react";

export const SignUpPage = () => {
  return (
    <div className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-background">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="relative h-full w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="h-[60vh] w-[60vh] rounded-full bg-gradient-to-tr from-purple-500 via-indigo-500 to-blue-500 opacity-20 blur-3xl animate-pulse-slow" />
          </div>

          {/* Centered rotating lines */}
          <div className="absolute left-1/2 top-1/2 h-[50vh] w-[50vh] animate-orbit opacity-20 transform origin-center">
            <div className="absolute h-0.5 w-full bg-primary" />
            <div className="absolute h-0.5 w-full bg-primary origin-center rotate-45" />
            <div className="absolute h-0.5 w-full bg-primary origin-center rotate-90" />
            <div className="absolute h-0.5 w-full bg-primary origin-center rotate-135" />
          </div>

          {/* Additional rotating element */}
          <div className="absolute left-1/2 top-1/2 h-[40vh] w-[40vh] animate-spin-slow opacity-10 transform origin-center">
            <div className="absolute h-full w-0.5 bg-primary left-1/2 -translate-x-1/2" />
            <div className="absolute h-0.5 w-full bg-primary top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Logo and Sign In Container */}
      <div className="relative z-10 flex w-full max-w-3xl flex-col items-center gap-8 p-4">
        {/* Logo */}
        <div className="flex items-center gap-4">
          <img
            src="/src/assets/fusion-Logo.webp"
            alt="Logo"
            className="h-16 w-16"
          />
          <span className="text-3xl font-bold text-foreground">
            Fusion Dashboard
          </span>
        </div>
        <SignUp
          routing="path"
          path={AppRoutes.signup}
          signInUrl={AppRoutes.signIn}
          appearance={{
            elements: {
              formButtonPrimary:
                "bg-primary text-primary-foreground hover:bg-primary/90",
              card: "bg-background border-border shadow-none",
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
      </div>
    </div>
  );
};
