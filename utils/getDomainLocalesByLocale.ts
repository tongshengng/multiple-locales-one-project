import { i18n } from "../next.config";

export const getDomainLocalesByLocale = (locale?: string) =>
  i18n?.domains?.find(({ locales }) => locale && locales?.includes(locale))
    ?.locales;
