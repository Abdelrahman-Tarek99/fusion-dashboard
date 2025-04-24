import { Skeleton } from "@/common/components";
import { AppRoutes } from "@/common/routes";
import { ClerkLoading, SignUp } from "@clerk/clerk-react";
import { BackgroundWrapper } from "@/common/wrappers";

export const SignUpPage = () => {
  return (
    <BackgroundWrapper>
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
    </BackgroundWrapper>
  );
};
