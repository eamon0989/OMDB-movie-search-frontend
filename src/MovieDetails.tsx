import styled from "styled-components";

const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 15rem;
  position: relative;
  border: 1px solid gray;
`

const MovieCardText = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  gap: 0.2rem;
  padding: 1rem;
`

const MovieTitle = styled.p`
  text-align: left;
  font-weight: bold;
  /* padding: 0.2rem; */
`

const MovieListDetails = function({ poster, title, type, year, imdbID }:
{ poster: string, title: string, type: string, year: string, imdbID: string }) {
  // console.log(title);
  return (
    <MovieCard>
      <img src={poster} alt="" />
      <MovieCardText>
        <MovieTitle>{title}</MovieTitle>
        <p>{type}</p>
        <p>{year}</p>
        {/* <p>{imdbID}</p> */}
      </MovieCardText>
    </MovieCard>
  )
}

export default MovieListDetails;
