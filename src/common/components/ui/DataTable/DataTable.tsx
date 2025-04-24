import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
  Input,
  ColumnToggle,
  FEPagination,
} from "@/common/components";
import { useDataTable } from "./useDataTable";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterByPlaceholder?: string;
  filterValue?: string;
  enableSearchFilter?: boolean;
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterByPlaceholder,
  filterValue,
  enableSearchFilter = true,
}: DataTableProps<TData, TValue>) {
  const {
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
  } = useDataTable();

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
    },
  });

  return (
    <div
      className={`rounded-md border p-4 ${
        isRtl ? "text-right rtl" : "text-left ltr"
      }`}
      dir={isRtl ? "rtl" : "ltr"}
    >
      {enableSearchFilter && (
        <div className="flex items-center justify-between py-4">
          <Input
            placeholder={filterByPlaceholder}
            value={
              (table
                .getColumn(filterValue as string)
                ?.getFilterValue() as string) ?? ""
            }
            onChange={(event) =>
              table
                .getColumn(filterValue as string)
                ?.setFilterValue(event.target.value)
            }
            className="max-w-sm"
          />
          <ColumnToggle table={table} />
        </div>
      )}
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </TableHead>
                );
              })}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {!hasVisibleColumns(table) ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {t("no_columns_visible")}
              </TableCell>
            </TableRow>
          ) : !hasData(table) ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                {t("no_results_found")}
              </TableCell>
            </TableRow>
          ) : (
            table.getRowModel().rows.map((row) => (
              <TableRow
                key={row.id}
                data-state={row.getIsSelected() && "selected"}
              >
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id}>
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <FEPagination table={table} />
    </div>
  );
}
