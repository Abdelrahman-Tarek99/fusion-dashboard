import { useAppDispatch, useAppSelector } from "@/store/store";
import { layoutData } from "./LayoutData";

export const useSideBar = () => {
  const dispatch = useAppDispatch();
  const { theme, language } = useAppSelector((s) => ({
    theme: s.theme,
    language: s.language,
  }));

  return {
    theme,
    language,
    dispatch,
    layoutData,
  };
};
