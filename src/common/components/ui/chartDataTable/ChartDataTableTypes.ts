import { ChartConfig } from "@/common/components";

export interface IChartDataTable {
  date: string;
  user: string;
  marketCapital: number;
}

export interface IChartDataTableProps {
  chartData: IChartDataTable[];
  chartConfig?: ChartConfig;
}
