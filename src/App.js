import React from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import { useState } from 'react';

function App() {

  const [movies,setmovies]= useState([]);


  async function fetchHandler() {
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      const data = await response.json();
  
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseData: movieData.release_date
        };
      });
  
      setmovies(transformedMovies);
    } catch (error) {
      console.log(error);
    }
  }
 
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
