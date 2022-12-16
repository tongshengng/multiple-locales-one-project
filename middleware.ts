import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";
import { getDomainLocalesByHostname } from "./utils/getDomainLocalesByHostname";
import { getLocaleByURL } from "./utils/getLocaleByURL";

export async function middleware(req: NextRequest) {
  if (
    req.url.includes("/_next/") ||
    req.url.includes("/api/") ||
    req.url.includes("favicon.ico")
  ) {
    return;
  }

  if (process.env.NODE_ENV === "development") {
    return;
  }

  const locale = getLocaleByURL(req.nextUrl);

  if (!locale) {
    return;
  }

  const domainLocales = getDomainLocalesByHostname(req.nextUrl.hostname);

  if (!domainLocales?.includes(locale)) {
    const url = req.nextUrl.clone();
    url.pathname = "/404";

    return NextResponse.rewrite(url);
  }
}
