import { useState } from 'react'
import './movies.css'

function Tag({ genre, filter, genres, setGenres }) {
  const [selected, setSelected] = useState(
    Array.isArray(genres) ? genres.includes(genre) : false
  )

  const handleTag = () => {
    if (selected) {
      setGenres(genres.filter((item) => item !== genre))
      setSelected(false)
    } else {
      setGenres([...genres, genre])
      setSelected(true)
    }
  }

  const label = genre
    .split('-')
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join('-')

  return (
    <li
      className={`tag ${selected ? 'selected' : ''} ${filter ? 'filter-tag' : ''}`.trim()}
      onClick={handleTag}
    >
      {label}
    </li>
  )
}

export default Tag
