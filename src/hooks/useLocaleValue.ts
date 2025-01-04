import { useLocale, useSiteData } from "dumi";
import { IAllThemeConfig } from "../types";

export default function useLocaleValue(key: string) {
  const { themeConfig } = useSiteData();
  const locale = useLocale();

  const additionalThemeConfig: IAllThemeConfig = themeConfig;
  const value = additionalThemeConfig[key];
  return value?.[locale.id] ?? value;
}
