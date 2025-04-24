import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Button } from "@/common/components";
import { motion } from "framer-motion";
import { HomeIcon } from "lucide-react";
import { AppRoutes } from "@/common/routes";

export const ErrorPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <motion.div
      className="flex h-screen w-screen flex-col items-center justify-center bg-background p-4"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-primary">404</h1>
        <h2 className="mb-4 text-2xl font-semibold">{t("page_not_found_title")}</h2>
        <p className="mb-8 text-muted-foreground">{t("page_not_found_description")}</p>
        <Button onClick={() => navigate(AppRoutes.dashboard)}>
          <HomeIcon className="mr-2 h-4 w-4" />
          {t("back_to_home")}
        </Button>
      </div>
    </motion.div>
  );
};
