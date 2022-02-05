import { useState } from "react";
import styled from "styled-components";
import { MovieListItem } from "../Types";
import getMovieDetailsByTitle from "./services/movies";

const isMovieListItem = function(array: MovieListItem[]): array is MovieListItem[] {
  return (array as MovieListItem[])[0]?.Title !== undefined;
}

const Form = styled.form`
  margin: auto;
  display: flex;
  padding: 4rem;
  flex-direction: row;
  width: fit-content;
`

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
      <Form onSubmit={(event) => getInfoFromAPI(event)} action="">
        <label htmlFor="title">Title</label>
        <input value={title} onChange={(event) => setTitle(event.target.value)} name='title' type="text" />
        <button type='submit'>Submit</button>
      </Form>
    </>
  )
}

export default SearchForm;
