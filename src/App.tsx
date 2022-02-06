import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { useState } from "react";
import { MovieListItem } from "../Types";
import MovieListDetails from "./components/MovieDetails";
import SearchForm from "./components/SearchForm";

import styled from 'styled-components';
import Fallback from './components/Fallback';

const Nav = styled.nav`
  background-color: #1f2937;  
  height: auto;
  text-align: center;
  color: white;
  font-weight: bold;
`;

const P = styled.p`
  padding: 2rem;
  margin: 0;
`

const MovieList = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  padding: 0 2rem 2rem 2rem;
  justify-content: center;
`

function App() {
  const [movies, setMovies] = useState<MovieListItem[]>([]);

  return (
    <>
      <Nav>
        <P>ODMB Search App</P>
      </Nav>
      <ErrorBoundary FallbackComponent={Fallback}>
        <main>
          <SearchForm setMovies={setMovies}/>
          <MovieList>
            {movies.length > 0 && movies.map(movie => <MovieListDetails key={movie.imdbID} poster={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} imdbID={movie.imdbID} />)}
          </MovieList>
        </main>    
      </ErrorBoundary>

    </>
  );
}

export default App;
