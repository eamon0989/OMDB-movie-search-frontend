import { MovieListItem } from "../../Types";

const baseUrl = 'http://www.omdbapi.com/?apikey=c491a5c4&s=';

const getMovieDetailsByTitle = async function(title: string) {
  // console.log(title);
  const response = await fetch(`${baseUrl}${title}`);
  const json = await response.json();
  // console.log(json);
  const movies: MovieListItem[] = await json?.Search;
  // console.log(movies);
  return movies;
}

export default getMovieDetailsByTitle;