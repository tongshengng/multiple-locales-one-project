import config from "../next.config";

export const getDomainLocalesByHostname = (hostname: string) =>
  config.i18n?.domains?.find(({ domain }) => domain === hostname)?.locales;
