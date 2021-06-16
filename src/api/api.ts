import {User} from "@/types/user";
import {Repo} from "@/types/repo";

export async function getUser(username: string): Promise<User> {
  const data: User = await (await
      fetch(`https://api.github.com/users/${username}`)).json();
  return data;
}

export async function getRepos(username: string): Promise<Repo[]> {
  const data: Repo[] = await (await
    fetch(`https://api.github.com/users/${username}/repos`)).json();
  return data;
}
