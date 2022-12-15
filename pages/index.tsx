import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();

  console.log(router);

  return <div></div>;
};

export default Home;
