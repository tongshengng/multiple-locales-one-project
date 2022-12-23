import type { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { i18n } from "../next.config";

const Home: NextPage = () => {
  const router = useRouter();

  const domainLocales = useMemo(
    () =>
      JSON.stringify(
        i18n?.domains?.filter(
          ({ locales }) => router.locale && locales?.includes(router.locale)
        ),
        null,
        2
      ),
    [router.locale]
  );

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h4></h4>
      <pre>{domainLocales}</pre>
      <div style={{ display: "flex", gap: "1rem" }}>
        {i18n?.locales.map((locale) => (
          <Link key={locale} href="/" locale={locale}>
            <button>{locale}</button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Home;
