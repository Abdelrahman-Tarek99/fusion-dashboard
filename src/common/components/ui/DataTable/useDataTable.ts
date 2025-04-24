import { SortingState, ColumnFiltersState, Table } from "@tanstack/react-table";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { i18n } from "@/Locals";

export const useDataTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const { t } = useTranslation();
  const isRtl = i18n.language === "ar";

  const hasVisibleColumns = <TData,>(table: Table<TData>) => {
    return table.getAllColumns().filter((column) => column.getIsVisible()).length > 0;
  };

  const hasData = <TData,>(table: Table<TData>) => {
    return table.getRowModel().rows?.length > 0;
  };

  return {
    sorting,
    setSorting,
    columnFilters,
    setColumnFilters,
    columnVisibility,
    setColumnVisibility,
    hasVisibleColumns,
    hasData,
    isRtl,
    t,
  };
};
