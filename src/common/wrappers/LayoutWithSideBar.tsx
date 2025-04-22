import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Separator,
  AppSidebar,
  BreadCrumbWrapper,
  Button,
} from "@/common/components";
import { useClerk } from "@clerk/clerk-react";
import { LogOut } from "lucide-react";
import { Outlet, useNavigate } from "react-router-dom";
import { AppRoutes } from "@/common/routes";
import { useTranslation } from "react-i18next";

export const LayoutWithSideBar = () => {
  const { signOut } = useClerk();
  const navigate = useNavigate();
  const { t } = useTranslation("");

  const handleSignOut = async () => {
    await signOut();
    navigate(AppRoutes.signIn);
  };

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center justify-between border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadCrumbWrapper />
          </div>
          <div className="px-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSignOut}
              className="gap-2"
            >
              <LogOut className="h-4 w-4" />
              {t("sign_out")}
            </Button>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <Outlet />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
};
