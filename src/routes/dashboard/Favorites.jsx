import { useEffect, useState } from 'react'
import axios from 'axios'
import MovieCard from '../../components/movies/MovieCard'
import './dashboard.css'

function Favorites() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')

    axios
      .get('http://localhost:8000/api/titles/favorite/', {
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
    <div className="favorites page">
      <h1 className="page-title">Movies you like</h1>
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId || movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  )
}

export default Favorites
