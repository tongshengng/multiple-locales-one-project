import { NextURL } from "next/dist/server/web/next-url";

export const getLocaleByURL = ({ href, origin, pathname }: NextURL) =>
  href.replace(origin, "").replace(pathname, "").replace("/", "");
