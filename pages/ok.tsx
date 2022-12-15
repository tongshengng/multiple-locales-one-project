import type { GetStaticPropsContext, NextPage } from "next";
import { useRouter } from "next/router";

export async function getStaticProps(ctx: GetStaticPropsContext) {
  // console.log(ctx);

  return {
    props: {},
  };
}

const Home: NextPage = () => {
  const router = useRouter();

  // console.log(router);

  return <div></div>;
};

export default Home;
