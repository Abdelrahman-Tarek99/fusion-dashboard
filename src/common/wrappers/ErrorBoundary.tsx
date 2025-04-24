import {
  FallbackProps,
  ErrorBoundary as ReactErrorBoundary,
} from "react-error-boundary";
import {
  Alert,
  AlertTitle,
  AlertDescription,
  Button,
} from "@/common/components";
import { RefreshCwIcon, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

function ErrorFallback({ resetErrorBoundary }: FallbackProps) {
  const { t } = useTranslation();
  
  return (
    <motion.div
      className="flex h-screen w-screen items-center justify-center bg-background p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Alert variant="destructive" className="max-w-md text-center">
        <motion.div
          initial={{ rotate: -10 }}
          animate={{ rotate: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <Terminal className="h-6 w-6 mx-auto" />
        </motion.div>
        <AlertTitle>{t("error_title")}</AlertTitle>
        <AlertDescription className="mt-2">
          {t("error_description")}
        </AlertDescription>
        <Button onClick={resetErrorBoundary} className="mt-4 w-max">
          <RefreshCwIcon className="mr-2" />
          <span>{t("refresh_page")}</span>
        </Button>
      </Alert>
    </motion.div>
  );
}

export const ErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  return (
    <ReactErrorBoundary
      FallbackComponent={ErrorFallback}
      onReset={() => {
        window.location.reload();
      }}
    >
      {children}
    </ReactErrorBoundary>
  );
};
