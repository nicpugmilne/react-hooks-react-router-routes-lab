import React from "react";
import { movies } from "../data";

function Movies() {
  const movieDiv = movies.map((movie) => {
    return (
      <div key={movie.title}>
        Title: {movie.title}, Minutes: {movie.time}
        <ul>
          {movie.genres.map((genre) => (
            <li key={genre}>{genre}</li>
          ))}
        </ul>
      </div>
    );
  });

  return (
    <div>
      <h1>Movies Page</h1>
      <div>{movieDiv}</div>
    </div>
  );
}

export default Movies;
