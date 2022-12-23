import type { GetStaticPropsContext, NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo } from "react";

export const getStaticPaths = async () => {
  return {
    paths: ["/hello"],
    fallback: false,
  };
};

export const getStaticProps = async (ctx: GetStaticPropsContext) => {
  return {
    props: {},
  };
};

const Home: NextPage = () => {
  return <div>HOME</div>;
};

export default Home;
