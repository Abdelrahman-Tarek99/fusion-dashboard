import { UserProfile } from "@clerk/clerk-react";
import { useTranslation } from "react-i18next";

export const Profile = () => {
  const { t } = useTranslation("");
  return (
    <div className="container  lg:mx-auto px-0 lg:px-4 py-6">
      <h1 className="mb-6 text-xl font-bold sm:text-2xl md:text-3xl">
        {t("profile")}
      </h1>

      <UserProfile
        appearance={{
          elements: {
            rootBox: "w-full max-w-4xl mx-auto",
            card: "border-0 shadow-none bg-background text-foreground w-full",
            profileSection:
              "flex flex-col sm:flex-row items-start sm:items-center justify-between w-full gap-4",
            profileSectionItem__profile: "w-full sm:w-auto !justify-start",
            navbar: "hidden",
            profileSectionHeader__profile: "!hidden",
            profileSectionHeader__emailAddresses: "!hidden",
            profileSectionHeader__connectedAccounts: "!hidden",
            pageScrollBox: "p-2 sm:p-4 md:p-6",
            profileSectionPrimaryButton:
              "min-w-[120px] w-full sm:w-auto text-center bg-primary text-primary-foreground hover:bg-primary/90",
            formButtonPrimary:
              "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90",
            formFieldInput:
              "w-full border rounded-md px-3 py-2 text-sm bg-background",
            formFieldLabel: "text-sm text-foreground mb-1",
            avatarBox: "mx-auto sm:mx-0 hover:opacity-80 transition-opacity",
            profileSectionContent: "space-y-4 w-full",
            profileSectionTitle: "text-lg font-semibold text-foreground",
            profileSectionSecondaryButton:
              "w-full sm:w-auto bg-secondary text-secondary-foreground hover:bg-secondary/90",
            accordionTriggerButton:
              "w-full text-left py-3 px-2 sm:px-4 text-sm font-medium",
            alertText: "text-sm text-destructive",
            headerTitle: "text-xl font-bold text-foreground",
            headerSubtitle: "text-sm text-muted-foreground",
            formFieldSuccessText: "text-sm text-success",
            formFieldErrorText: "text-sm text-destructive",
            dividerLine: "my-4 bg-border",
            dividerText: "text-xs text-muted-foreground px-2",
          },
          layout: {
            socialButtonsPlacement: "bottom",
            socialButtonsVariant: "blockButton",
          },
        }}
      />
    </div>
  );
};
