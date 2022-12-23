import type { NextPage } from "next";

export const getServerSideProps = async () => {
  return {
    props: {},
  };
};

const Ref: NextPage = () => {
  return <div>REF</div>;
};

export default Ref;
