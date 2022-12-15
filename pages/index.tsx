import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  return <pre>{JSON.stringify(router, null, 2)}</pre>;
};

export default Home;
