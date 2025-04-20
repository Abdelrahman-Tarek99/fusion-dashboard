import { DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Table } from "@tanstack/react-table";
import { Settings2 } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  Button,
} from "@/common/components";
import { i18n } from "@/Locals";

interface DataTableViewOptionsProps<TData> {
  table: Table<TData>;
}

export function ColumnToggle<TData>({
  table,
}: DataTableViewOptionsProps<TData>) {
  const isRtl = i18n.language === "ar";

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className={`   hidden h-8 lg:flex`}>
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={isRtl ? "start" : "end"}
        className="w-[150px]"
      >
        <DropdownMenuLabel
          onClick={(e) => {
            e.stopPropagation();
            table.toggleAllColumnsVisible();
          }}
          className="cursor-pointer capitalize"
        >
          {i18n.t("toggle_all_columns")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter(
            (column) =>
              typeof column.accessorFn !== "undefined" && column.getCanHide()
          )
          .map((column) => {
            console.log(column.id);
            return (
              <DropdownMenuCheckboxItem
                key={column.id}
                className="capitalize"
                checked={column.getIsVisible()}
                onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                {i18n.t(column.id)}
              </DropdownMenuCheckboxItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
