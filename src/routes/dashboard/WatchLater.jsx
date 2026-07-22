import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../components/movies/MovieCard'
import './dashboard.css'

function WatchLater() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    axios
      .get('http://localhost:8000/api/titles/watchLater/', {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        setMovies(response.data)
      })
      .catch(() => {})
  }, [])

  return (
    <div className="watch-later page">
      <h1 className="page-title">Movies to watch later</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId || movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default WatchLater
