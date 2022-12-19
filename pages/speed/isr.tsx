import Link from "next/link";
import { FC, useCallback } from "react";
import { getEntries } from "../../services/getEntries";

export const getStaticProps = async () => {
  const results = await getEntries();
  const date = new Date().toISOString();
  return {
    props: {
      date,
      total: results.total,
    },
  };
};

const ISR: FC<Awaited<ReturnType<typeof getStaticProps>>["props"]> = ({
  date,
  total,
}) => {
  const handleRevalidation = useCallback(async () => {
    const res = await fetch("/api/revalidation");
    const data = await res.json();
    console.log(data);
  }, []);

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

        <button onClick={handleRevalidation}>Revalidate /speed/isr</button>
      </div>
    </div>
  );
};

export default ISR;
