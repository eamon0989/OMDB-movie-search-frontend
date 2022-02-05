// const MovieDetails = function({ poster, title, genres, description, writers, directors, stars }:
// { poster: string, title: string, genres: string, description: string, writers: string, directors: string, stars: string }) {
const MovieListDetails = function({ poster, title, type, year, imdbID }:
{ poster: string, title: string, type: string, year: string, imdbID: string }) {
  console.log(title);
  return (
    <div>
      <img src={poster} alt="" />
      <p>{title}</p>
      <p>{type}</p>
      <p>{year}</p>
      <p>{imdbID}</p>
    </div>
  )
}

export default MovieListDetails;
