import React from 'react';
import { useState } from "react";
import { MovieListItem } from "../Types";
import MovieListDetails from "./MovieDetails";
import SearchForm from "./SearchForm";

import styled from 'styled-components';

const Nav = styled.nav`
  background-color: gray;  
  height: auto;
  text-align: center;
`;

const P = styled.p`
  padding: 2rem;
  margin: 0;
`

function App() {
  const [movies, setMovies] = useState<MovieListItem[]>([]);

  return (
    <>
      <Nav>
        <P>ODMB Search App</P>
      </Nav>
      <main>
        <SearchForm setMovies={setMovies}/>
        {movies.length > 0 && movies.map(movie => <MovieListDetails poster={movie.Poster} title={movie.Title} type={movie.Type} year={movie.Year} imdbID={movie.imdbID} />)}
      </main>    
    </>
  );
}

export default App;
