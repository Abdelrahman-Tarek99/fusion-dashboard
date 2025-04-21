import { Table } from "@tanstack/react-table";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
} from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Button,
} from "@/common/components";
import { useTranslation } from "react-i18next";
import i18n from "i18next";

interface DataTablePaginationProps<TData> {
  table: Table<TData>;
}

const pageSizeOptions = [
  { value: 10, label: "User" },
  { value: 20, label: "Desktop" },
  { value: 30, label: "Market Capital" },
];

export function FEPagination<TData>({
  table,
}: DataTablePaginationProps<TData>) {
  const { t } = useTranslation();
  const isRtl = i18n.language === "ar";

  return (
    <div className="flex items-center justify-between px-2">
      <span></span>
      <div className="flex items-center space-x-6 lg:space-x-8">
        <div className="flex items-center space-x-2">
          <p className="text-sm font-medium">{t("rows_per_page")}</p>
          <Select
            value={`${table.getState().pagination.pageSize}`}
            onValueChange={(value) => {
              table.setPageSize(Number(value));
            }}
          >
            <SelectTrigger className="h-8 w-[70px]">
              <SelectValue placeholder={table.getState().pagination.pageSize} />
            </SelectTrigger>
            <SelectContent side="top">
              {pageSizeOptions.map((option) => (
                <SelectItem key={option.value} value={`${option.value}`}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex w-[100px] items-center justify-center text-sm font-medium">
          {t("page")} {table.getState().pagination.pageIndex + 1} {t("of")}{" "}
          {table.getPageCount()}
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(0)}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("go_to_first_page")}</span>
            {isRtl ? <ChevronsRight /> : <ChevronsLeft />}
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <span className="sr-only">{t("go_to_previous_page")}</span>
            {isRtl ? <ChevronRight /> : <ChevronLeft />}
          </Button>
          <Button
            variant="outline"
            className="h-8 w-8 p-0"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("go_to_next_page")}</span>
            {isRtl ? <ChevronLeft /> : <ChevronRight />}
          </Button>
          <Button
            variant="outline"
            className="hidden h-8 w-8 p-0 lg:flex"
            onClick={() => table.setPageIndex(table.getPageCount() - 1)}
            disabled={!table.getCanNextPage()}
          >
            <span className="sr-only">{t("go_to_last_page")}</span>
            {isRtl ? <ChevronsLeft /> : <ChevronsRight />}
          </Button>
        </div>
      </div>
    </div>
  );
}
