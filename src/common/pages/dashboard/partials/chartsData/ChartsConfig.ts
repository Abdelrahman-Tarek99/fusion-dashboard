import { ChartConfig } from "@/common/components";

export const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  user: {
    label: "User",
    color: "hsl(var(--chart-1))",
  },
  marketCapital: {
    label: "Market Capital",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;
