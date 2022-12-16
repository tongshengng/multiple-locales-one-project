import { i18n } from "../next.config";

export const getDomainLocalesByHostname = (hostname: string) =>
  i18n?.domains?.find(({ domain }) => domain === hostname)?.locales;
