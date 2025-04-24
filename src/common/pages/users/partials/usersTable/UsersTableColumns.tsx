import { ColumnDef } from "@tanstack/react-table";
import { IUsersData } from "@/common/pages";
import { Button } from "@/common/components";
import { ArrowUpDown } from "lucide-react";
import { i18n } from "@/Locals";

export const UsersColumns: ColumnDef<IUsersData>[] = [
  {
    accessorKey: "id",
    header: () => <span>{i18n.t("id")}</span>,
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <span>
          <Button
            variant="ghost"
            className="hover:cursor-pointer"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            {i18n.t("email")}
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        </span>
      );
    },
  },
  {
    accessorKey: "lastName",
    header: () => <span>{i18n.t("lastName")}</span>,
  },
  {
    accessorKey: "status",
    header: () => <span>{i18n.t("status")}</span>,
  },
];
