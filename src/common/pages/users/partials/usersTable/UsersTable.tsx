import { DataTable } from "@/common/components";
import { UsersColumns, usersData } from "@/common/pages";
import { useTranslation } from "react-i18next";

export const UsersTable = () => {
  const { t } = useTranslation();
  return (
    <div className="flex flex-1 flex-col gap-4 rounded-xl bg-muted/50 p-4">
      <h2 className="text-lg font-semibold">{t("Users")}</h2>
      <div className="overflow-hidden rounded-md border">
        <DataTable data={usersData} columns={UsersColumns} />
      </div>
    </div>
  );
};
