import { Suspense } from "react";
import { ErrorBoundary } from "@/common/wrappers";
import { RouteLoader } from "@/common/components";

export const LazyWithBoundary = ({
  children,
}: {
  children: React.ReactNode;
}) => (
  <ErrorBoundary>
    <Suspense fallback={<RouteLoader />}>{children}</Suspense>
  </ErrorBoundary>
);
