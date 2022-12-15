import { NextResponse } from "next/server";
import config from "./next.config";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (
    !request.url.includes("/_next/") &&
    !request.url.includes("favicon.ico")
  ) {
    const { href, origin, pathname, hostname } = request.nextUrl;
    const locale = href
      .replace(origin, "")
      .replace(pathname, "")
      .replace("/", "");

    if (!locale) {
      return NextResponse.next();
    }

    const domain = config.i18n?.domains?.find(
      ({ domain }) => domain === hostname
    );

    if (!domain?.locales?.includes(locale)) {
      const url = request.nextUrl.clone();
      url.pathname = "/404";

      return NextResponse.rewrite(url);
    }
  }

  return NextResponse.next();
}
