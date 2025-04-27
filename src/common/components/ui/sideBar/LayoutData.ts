import { AppRoutes } from "@/common/routes";

export const layoutData = {
  navMain: [
    {
      title: "Dashboard",
      url: AppRoutes.dashboard,
    },
    {
      title: "Profile",
      url: AppRoutes.profile,
    },
    {
      title: "User Management",
      url: AppRoutes.users,
      items: [
        { title: "All Users", url: AppRoutes.users },
        { title: "Permissions", url: AppRoutes.permissions },
      ],
    },
  ],
};
