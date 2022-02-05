import { useState } from "react";
import { MovieListItem } from "../Types";
import MovieListDetails from "./MovieDetails";
import SearchForm from "./SearchForm";

const Body = function() {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  
  return (
    <main>
      <SearchForm setMovies={setMovies}/>
      {movies.length > 0 && movies.map(movie => <MovieListDetails poster={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} imdbID={movie.imdbID} />)}
    </main>
  )
}

export default Body;
