import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "../assets/style.css/Dash.css"
import { Link } from 'react-router-dom';
const Trending = () => {
  const [movies, setMovies] = useState([]);
  const apiKey = 'fa8a52fc723a5006037209473070708a';
  const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  useEffect(() => {
    axios.get(url)
      .then((res) => {
        setMovies(res.data.results);
        console.log(res.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [url]);

  return (
    <div>
      <div className="cover-all">
        <div className="nav">
          <img src="https://res.cloudinary.com/dgxvuw8wd/image/upload/v1718796714/ppqlbl875tfb1flsrvcy.png" alt="" />
          <div className="search">
            {/* <input type="search" /> */}
          </div>
        </div>
        <div className="flex">
          <div className="side-bars">
            <Link to={"/home"}>Home</Link>
            <Link to={"/trending"}>Trending</Link>
            <Link to={"/trailer"}>Trailers</Link>
            <Link to={"/hotmovies"}>Hot Movies </Link>
          </div>
          <div className="movie-list">
            {movies.map(movie => (
              <div key={movie.id} className="movie">
                <img
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt={movie.title}
                  style={{ width: '300px', height: '400px' }}
                />
                <p className='title'>{movie.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Trending;
