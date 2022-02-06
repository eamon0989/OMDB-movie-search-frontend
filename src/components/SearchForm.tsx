import { useState } from "react";
import styled from "styled-components";
import { MovieListItem } from "../../Types";
import getMovieListByTitleSearch from "../services/movies";

const isMovieListItem = function(array: MovieListItem[]): array is MovieListItem[] {
  return (array as MovieListItem[])[0]?.Title !== undefined;
}

const Form = styled.form`
  margin: auto;
  display: flex;
  padding: 4rem;
  font-size: .875rem;
  line-height: 1.25rem;
  flex-direction: column;
  width: fit-content;
  align-items: left;
`

const Input = styled.input`
  border-radius: 0.375rem 0 0 0.375rem;
  border-width: 1px;
  font-size: .875rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.7rem;
  border-bottom-right-radius: 0px;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #3b82f6;
    }
`

const SubmitButton = styled.button`
  border-radius: 0 0.375rem 0.375rem 0;
  border-width: 1px;
  font-size: .875rem;
  line-height: 1.25rem;
  padding: 0.3rem 0.7rem;
  background-color: #3b82f6;
  color: white;
  font-weight: 500;
  &:focus {
        outline: none;
        box-shadow: 0px 0px 2px #3b82f6;
    }
`

const ErrorMessage = styled.p`
  color: red;
  height: 1.25rem;
`

const SearchForm = function({ setMovies }: { setMovies: (arg0: MovieListItem[]) => void }) {
  const [title, setTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  const getInfoFromAPI = async function(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
  
    if (title.length > 0) {
      try {
        const movies = await getMovieListByTitleSearch(title);

        if (movies && isMovieListItem(movies)) {
          setMovies(movies);
          setTitle('');
          if (errorMessage) setErrorMessage('');
        } else {
          setErrorMessage('No movies match your search.');
          setMovies([]);
        }
  
      } catch (error: unknown) {
        console.log(error);
      }
    } else {
      setErrorMessage('Please write a title.');
      setMovies([]);
    }
  }
  
  return (
    <>
      <Form onSubmit={(event) => getInfoFromAPI(event)} action="">
        <label htmlFor="title">Find a film: </label>
        <div>
          <Input id='search-bar' value={title} onChange={(event) => setTitle(event.target.value)} name='title' type="text"></Input>
          <SubmitButton type='submit'>Submit</SubmitButton>
        </div>
        {<ErrorMessage id='error-message'>{errorMessage}</ErrorMessage>}
      </Form>
    </>
  )
}

export default SearchForm;
