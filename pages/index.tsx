import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import { i18n } from "../next.config";

const Home: NextPage = () => {
  const router = useRouter();

  const domainLocales = useMemo(
    () =>
      JSON.stringify(
        i18n?.domains?.find(
          ({ locales }) => router.locale && locales?.includes(router.locale)
        ),
        null,
        2
      ),
    [router.locale]
  );

  return <pre>{domainLocales}</pre>;
};

export default Home;
