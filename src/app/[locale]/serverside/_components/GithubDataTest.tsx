import { FC } from "react";

export const GithubDataTest: FC<{ url: string }> = async ({ url }) => {
  const data = await (await fetch(url, { next: { revalidate: 60 } })).json();

  return (
    <div>
      <h2>{data.name}</h2>
      <p>{data.description}</p>
      <strong>👀 {data.subscribers_count}</strong> <strong>✨ {data.stargazers_count}</strong>{" "}
      <strong>🍴 {data.forks_count}</strong>
    </div>
  );
};
