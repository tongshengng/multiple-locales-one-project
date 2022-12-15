import type {
  GetStaticPathsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { useRouter } from "next/router";
import config from "../next.config";

export async function getStaticPaths(ctx: GetStaticPathsContext) {
  return {
    paths: [],
    fallback: "blocking",
  };
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const router = useRouter();

  const regionLocales = config.i18n?.domains?.find(
    (domain) => router.locale && domain.locales?.includes(router.locale)
  )?.locales;

  return <div>{String(regionLocales)}</div>;
};

export default Home;
