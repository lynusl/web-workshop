import {User} from "@/types/user";
import {getRepos, getUser} from "@/api/api";
import {Repo} from "@/types/repo";

async function main(): Promise<string> {
  const name = "lynusl";
  const user: User = await getUser(name);
  const repos: Repo[] = await getRepos(name);
  const starredRepos: Repo[] = repos.filter(e => e.stargazers_count > 0);
  return `${user.login} has ${starredRepos.length} starred repos.`;
}

export default {
  main
};
