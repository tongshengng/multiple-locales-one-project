import config from "../next.config";

export const getDomainLocalesByLocale = (locale?: string) =>
  config.i18n?.domains?.find(
    ({ locales }) => locale && locales?.includes(locale)
  )?.locales;
