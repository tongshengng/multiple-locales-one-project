import Link from "next/link";
import { FC } from "react";
import { getEntries } from "../../services/getEntries";

export const getServerSideProps = async () => {
  const results = await getEntries();
  const date = new Date().toISOString();
  return {
    props: {
      date,
      total: results.total,
    },
  };
};

const SSR: FC<Awaited<ReturnType<typeof getServerSideProps>>["props"]> = ({
  date,
  total,
}) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <h4></h4>
      <pre>Total contentful entry: {total}</pre>
      <div>{date}</div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <Link href="/speed/ssr">
          <button>Server side rendering</button>
        </Link>
        <Link href="/speed/ssg">
          <button>Static site generation</button>
        </Link>
        <Link href="/speed/isr">
          <button>Incremental static regeneration</button>
        </Link>
      </div>
    </div>
  );
};

export default SSR;
