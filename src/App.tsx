// import { useAppDispatch, useAppSelector } from "@/store/store";
// import { toggleTheme } from "./store/themeSlice/themeSlice";
// import { toggleLang } from "@/store/LanguageSlice/LanguageSlice";
// import { useTranslation } from "react-i18next";
// import { Button } from "./common/components/ui/button";

// export default function App() {
//   const { t } = useTranslation("");
//   const dispatch = useAppDispatch();
//   const { theme, language } = useAppSelector((s) => ({
//     theme: s.theme,
//     language: s.language,
//   }));

//   return (
//     <div className="flex gap-2">
//       <Button onClick={() => dispatch(toggleTheme())}>
//         {theme === "dark" ? "☀️" : "🌙"}
//       </Button>
//       <span>{t("common.welcome")}</span>
//       <Button onClick={() => dispatch(toggleLang())}>
//         {language === "en" ? "AR" : "EN"}
//       </Button>
//     </div>
//   );
// }

import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
  Separator,
} from "@/common/components";
import { AppSidebar, BreadCrumbWrapper } from "@/common/wrappers";

export default function App() {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b">
          <div className="flex items-center gap-2 px-3">
            <SidebarTrigger />
            <Separator orientation="vertical" className="mr-2 h-4" />
            <BreadCrumbWrapper />
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <div className="grid auto-rows-min gap-4 md:grid-cols-3">
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
            <div className="aspect-video rounded-xl bg-muted/50" />
          </div>
          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
