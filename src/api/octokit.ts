import { Octokit } from "octokit";
import { RepositoryType } from "../types/RepositoryType";

const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
const octokit = new Octokit({ auth: accessToken });

export async function getRepos(): Promise<RepositoryType[]> {
  const { data } = await octokit.request("GET /users/{username}/repos", {
    username: "esthereis",
  });

  return data.map((repo) => ({
    id: repo.id,
    description: repo.description,
    name: repo.name,
    language: repo.language,
    stars: repo.stargazers_count,
    forks: repo.forks,
  }));
}
