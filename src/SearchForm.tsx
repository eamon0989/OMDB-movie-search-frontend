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
  align-items: center;
`

const Input = styled.input`
  border-radius: 0.375rem 0 0 0.375rem;
  border-width: 1px;
  font-size: .875rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.7rem;
  margin-left: 0.5rem;
`

const SubmitButton = styled.button`
  border-radius: 0 0.375rem 0.375rem 0;
  border-width: 1px;
  font-size: .875rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.7rem;
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
        <label htmlFor="title">Find a film: </label>
        <Input value={title} onChange={(event) => setTitle(event.target.value)} name='title' type="text"></Input>
        <SubmitButton type='submit'>Submit</SubmitButton>
      </Form>
    </>
  )
}

export default SearchForm;
