import { createClient } from "contentful";

export const getEntries = async () => {
  const client = createClient({
    space: "hrpsj0f8hvgc",
    environment: "master",
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN || "",
  });

  const results = await client.getEntries();

  return results;
};
