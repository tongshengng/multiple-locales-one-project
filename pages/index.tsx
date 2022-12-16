import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useMemo } from "react";
import domains from "../domains";

const Home: NextPage = () => {
  const router = useRouter();

  const domainLocales = useMemo(
    () =>
      JSON.stringify(
        domains?.find(
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
