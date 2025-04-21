import React from "react";
import { useTranslation } from "react-i18next";
import { IChartDataTableProps } from "@/common/components";
import { i18n } from "@/Locals";

export const useChartTableData = ({ chartData }: IChartDataTableProps) => {
  const { t } = useTranslation();
  const [timeRange, setTimeRange] = React.useState("90d");
  const isRtl = i18n.language === "ar";

  const filteredData = chartData.filter((item) => {
    const date = new Date(item.date);
    const referenceDate = new Date("2024-06-30");
    let daysToSubtract = 90;
    if (timeRange === "30d") {
      daysToSubtract = 30;
    } else if (timeRange === "7d") {
      daysToSubtract = 7;
    }
    const startDate = new Date(referenceDate);
    startDate.setDate(startDate.getDate() - daysToSubtract);
    return date >= startDate;
  });

  return {
    filteredData,
    timeRange,
    setTimeRange,
    t,
    isRtl,
  };
};
