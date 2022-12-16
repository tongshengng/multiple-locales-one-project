import domains from "../domains";

export const getDomainLocalesByHostname = (hostname: string) =>
  domains?.find(({ domain }) => domain === hostname)?.locales;
