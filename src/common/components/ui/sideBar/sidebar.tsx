import * as React from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  Button,
} from "@/common/components";
import { useSideBar } from "./useSideBar";
import { toggleTheme } from "@/store/themeSlice/themeSlice";
import { toggleLang } from "@/store/LanguageSlice/LanguageSlice";
import { AppRoutes } from "@/common/routes";
import fusionLogo from "@/assets/fusion-Logo.webp";

export function AppSidebar(props: React.ComponentProps<typeof Sidebar>) {
  const { pathname } = useLocation();
  const { dispatch, theme, language, layoutData } = useSideBar();

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Link to={AppRoutes.dashboard}>
                <div className="flex aspect-square size-8 items-center justify-between rounded-lg text-sidebar-primary-foreground">
                  <img
                    src={fusionLogo}
                    alt="Logo"
                    className="h-8 w-8 rounded-full"
                  />
                  <span className="ml-2 text-sm font-semibold text-foreground text-nowrap">
                    Fusion Dashboard
                  </span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            {layoutData.navMain.map((item) => {
              const isParentActive =
                pathname === item.url ||
                item?.items?.find((sub) => pathname === sub.url);

              return (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    asChild
                    isActive={isParentActive && !item.items?.length}
                  >
                    <Link to={item.url} className="font-medium">
                      {item.title}
                    </Link>
                  </SidebarMenuButton>

                  {item.items?.length ? (
                    <SidebarMenuSub>
                      {item.items.map((sub) => {
                        const isActive = pathname === sub.url;
                        return (
                          <SidebarMenuSubItem key={sub.title}>
                            <SidebarMenuSubButton asChild isActive={isActive}>
                              <Link to={sub.url}>{sub.title}</Link>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        );
                      })}
                    </SidebarMenuSub>
                  ) : null}
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex gap-2">
          <Button onClick={() => dispatch(toggleTheme())}>
            {theme === "dark" ? "☀️" : "🌙"}
          </Button>

          <Button onClick={() => dispatch(toggleLang())}>
            {language === "en" ? "AR" : "EN"}
          </Button>
        </div>
      </SidebarFooter>

      <SidebarRail />
    </Sidebar>
  );
}
