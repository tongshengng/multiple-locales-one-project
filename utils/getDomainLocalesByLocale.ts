import domains from "../domains";

export const getDomainLocalesByLocale = (locale?: string) =>
  domains?.find(({ locales }) => locale && locales?.includes(locale))?.locales;
