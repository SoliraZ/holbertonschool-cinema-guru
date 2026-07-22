import { useEffect, useState } from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faClock } from '@fortawesome/free-solid-svg-icons'
import './movies.css'

function MovieCard({ movie }) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [isWatchLater, setIsWatchLater] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('accessToken')
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }

    axios
      .get('http://localhost:8000/api/titles/favorite/', options)
      .then((response) => {
        const found = response.data.some(
          (item) => item.imdbId === movie.imdbId || item.id === movie.id
        )
        setIsFavorite(found)
      })
      .catch(() => {})

    axios
      .get('http://localhost:8000/api/titles/watchLater/', options)
      .then((response) => {
        const found = response.data.some(
          (item) => item.imdbId === movie.imdbId || item.id === movie.id
        )
        setIsWatchLater(found)
      })
      .catch(() => {})
  }, [movie])

  const handleClick = (type) => {
    const accessToken = localStorage.getItem('accessToken')
    const options = {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
    const url = `http://localhost:8000/api/titles/${type}/${movie.imdbId}`

    if (type === 'favorite') {
      if (isFavorite) {
        axios
          .delete(url, options)
          .then(() => setIsFavorite(false))
          .catch(() => {})
      } else {
        axios
          .post(url, {}, options)
          .then(() => setIsFavorite(true))
          .catch(() => {})
      }
    }

    if (type === 'watchlater') {
      if (isWatchLater) {
        axios
          .delete(url, options)
          .then(() => setIsWatchLater(false))
          .catch(() => {})
      } else {
        axios
          .post(url, {}, options)
          .then(() => setIsWatchLater(true))
          .catch(() => {})
      }
    }
  }

  const imageUrl =
    movie?.imageurls && movie.imageurls.length > 0 ? movie.imageurls[0] : null

  return (
    <li className="movie-card">
      <div className="movie-card-actions">
        <span
          className={`movie-card-icon ${isFavorite ? 'active' : ''}`}
          onClick={() => handleClick('favorite')}
        >
          <FontAwesomeIcon icon={faHeart} />
        </span>
        <span
          className={`movie-card-icon ${isWatchLater ? 'active' : ''}`}
          onClick={() => handleClick('watchlater')}
        >
          <FontAwesomeIcon icon={faClock} />
        </span>
      </div>

      {imageUrl ? (
        <img className="movie-card-image" src={imageUrl} alt={movie.title} />
      ) : (
        <div className="movie-card-image-placeholder"></div>
      )}

      <div className="movie-card-body">
        <h3 className="movie-card-title">{movie.title}</h3>
        <p className="movie-card-synopsis">{movie.synopsis}</p>
        <ul className="movie-card-genres">
          {(movie.genres || []).map((genre) => (
            <li key={genre} className="movie-card-genre">
              {genre}
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default MovieCard
