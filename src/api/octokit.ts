import { Octokit } from "octokit";

const accessToken = import.meta.env.VITE_GITHUB_TOKEN;
const octokit = new Octokit({ auth: accessToken });

export async function getRepos(){  
  const {
    data,
  } = await octokit.request('GET /users/{username}/repos',
    {
      username: 'esthereis'
    }
  )
  return data;

}

