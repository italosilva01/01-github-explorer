import { useEffect, useState } from "react";

import { RepositoryItem } from "./RepositoryItem";
import "../styles/repository.scss";

const repository = {
  name: "unform",
  description: "Forms in React",
  link: "https://github.com/unform/unform",
};
interface Repository {
  name: string;
  link: string;
  description: string;
}
export function RepositoryList() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/orgs/rocketseat/repos")
      .then((response) => response.json())
      .then((data) => {
        setRepositories(data);
      });
  }, []);

  return (
    <section className="repository-list">
      <h1>Lista de repositórios</h1>

      <ul>
        {repositories.map((repo) => (
          <RepositoryItem repository={repo} key={repo.name} />
        ))}
      </ul>
    </section>
  );
}
