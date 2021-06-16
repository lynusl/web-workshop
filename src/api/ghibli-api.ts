import {Movie} from "@/types/movie";

export async function getAllMovies() : Promise<Movie[]> {
  const movies : Movie[] = await (await
    fetch("https://ghibliapi.herokuapp.com/films?limit=250")).json();
  return movies;
}

export async function getMoviesDirectedBy(director: string) : Promise<Movie[]> {
  const movies : Movie[] = await
    getAllMovies()
      .then( allMovies => {
        return allMovies.filter(m => m.director==director);
      });
  return movies;
}


export async function getInfoFromMovieName(movieName: string) : Promise<Movie> {
  const requestedMovie : Movie = await
    getAllMovies()
    .then( movies => {
      return movies.filter(m => m.title==movieName);
    })
    .then( moviesWithName => {
      return moviesWithName[0];
    });

  return requestedMovie;
}
