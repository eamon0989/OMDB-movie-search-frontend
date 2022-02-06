import { MovieListItem } from "../../Types";

const baseUrl = 'http://www.omdbapi.com/?apikey=c491a5c4&s=';

const getMovieDetailsByTitle = async function(title: string) {
  const response = await fetch(`${baseUrl}${title}`);
  const json = await response.json();
  const movies: MovieListItem[] | undefined = await json?.Search;

  return movies;
}

export default getMovieDetailsByTitle;