import {User} from "@/types/user";
import {getRepos, getUser} from "@/api/api";
import {Repo} from "@/types/repo";
import {Movie} from "@/types/movie";
import {getInfoFromMovieName, getMoviesDirectedBy} from "@/api/ghibli-api";

async function main(): Promise<string> {
  const name = "lynusl";
  const director = "Hayao Miyazaki";
  const user: User = await getUser(name);
  const repos: Repo[] = await getRepos(name);
  const starredRepos: Repo[] = repos.filter(e => e.stargazers_count > 0);
  const movie : Movie = await getInfoFromMovieName("Grave of the Fireflies");
  const directedMovies : Movie[] = await getMoviesDirectedBy(director);

  const directedOriginalTitles : string[] = [];
  for (const m of directedMovies) {
    if (m.director==director) {
      directedOriginalTitles.push(m.original_title);
    }
  }

  return `${director} has directed ${directedOriginalTitles.length} Studio Ghibli movies, namely ${directedOriginalTitles.join(", ")}.`;
}

export default {
  main
};
