import { useEffect, useState } from 'react'
import axios from 'axios'
import Filter from '../../components/movies/Filter'
import MovieCard from '../../components/movies/MovieCard'
import Button from '../../components/general/Button'
import './dashboard.css'

function HomePage() {
  const [movies, setMovies] = useState([])
  const [minYear, setMinYear] = useState(1970)
  const [maxYear, setMaxYear] = useState(2022)
  const [genres, setGenres] = useState([])
  const [sort, setSort] = useState('')
  const [title, setTitle] = useState('')
  const [page, setPage] = useState(1)

  const loadMovies = (pageNumber) => {
    const accessToken = localStorage.getItem('accessToken')

    axios
      .get('http://localhost:8000/api/titles/advancedsearch', {
        params: {
          minYear,
          maxYear,
          genres: genres.join(','),
          title,
          sort,
          page: pageNumber,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        const titles = response.data.titles || []
        setMovies((previous) =>
          pageNumber === 1 ? titles : [...previous, ...titles]
        )
        setPage(pageNumber)
      })
      .catch(() => {})
  }

  useEffect(() => {
    loadMovies(1)
  }, [minYear, maxYear, genres, sort, title])

  return (
    <div className="home-page page">
      <Filter
        minYear={minYear}
        setMinYear={setMinYear}
        maxYear={maxYear}
        setMaxYear={setMaxYear}
        sort={sort}
        setSort={setSort}
        genres={genres}
        setGenres={setGenres}
        title={title}
        setTitle={setTitle}
      />
      <ul className="movies-list">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbId || movie.id} movie={movie} />
        ))}
      </ul>
      <div className="load-more">
        <Button
          label="Load More.."
          className="load-more-button"
          onClick={() => loadMovies(page + 1)}
        />
      </div>
    </div>
  )
}

export default HomePage
