import { ChartDataTable } from "@/common/components";
import { chartConfig, chartData } from "@/common/pages/dashboard";

export const Dashboard = () => {
  return <ChartDataTable chartData={chartData} chartConfig={chartConfig} />;
};
