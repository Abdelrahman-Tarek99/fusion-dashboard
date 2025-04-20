export const layoutData = {
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
    },
    {
      title: "Profile",
      url: "/profile",
    },
    {
      title: "User Management",
      url: "/users",
      items: [
        { title: "All Users", url: "/users" },
        { title: "Permissions", url: "/users/permissions" },
      ],
    },
  ],
};
