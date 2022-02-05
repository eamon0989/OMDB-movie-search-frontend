import { useState } from "react";
import { MovieListItem } from "../Types";
import getMovieDetailsByTitle from "./services/movies";

const isMovieListItem = function(array: MovieListItem[]): array is MovieListItem[] {
  return (array as MovieListItem[])[0]?.Title !== undefined;
}

const SearchForm = function({ setMovies }: { setMovies: (arg0: MovieListItem[]) => void }) {
  const [title, setTitle] = useState('');
  const getInfoFromAPI = async function(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (title.length > 0) {
      const movies: MovieListItem[] = await getMovieDetailsByTitle(title);
      if (isMovieListItem(movies)) {
        setMovies(movies);
      }

      // setTitle('');
    }
  }
  
  return (
    <>
      <form onSubmit={(event) => getInfoFromAPI(event)} action="">
        <label htmlFor="title">Title</label>
        <input value={title} onChange={(event) => setTitle(event.target.value)} name='title' type="text" />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}

export default SearchForm;
