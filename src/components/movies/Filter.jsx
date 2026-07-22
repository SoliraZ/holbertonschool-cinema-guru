import SearchBar from '../general/SearchBar'
import Input from '../general/Input'
import SelectInput from '../general/SelectInput'
import Tag from './Tag'
import './movies.css'

const GENRES = [
  'action',
  'drama',
  'comedy',
  'biography',
  'romance',
  'thriller',
  'war',
  'history',
  'sport',
  'sci-fi',
  'documentary',
  'crime',
  'fantasy',
]

const SORT_OPTIONS = [
  { value: 'latest', title: 'Latest' },
  { value: 'oldest', title: 'Oldest' },
  { value: 'highestrated', title: 'Highest Rated' },
  { value: 'lowestrated', title: 'Lowest Rated' },
]

function Filter({
  minYear,
  setMinYear,
  maxYear,
  setMaxYear,
  sort,
  setSort,
  genres,
  setGenres,
  title,
  setTitle,
}) {
  return (
    <div className="filter">
      <div className="filter-controls">
        <SearchBar title={title} setTitle={setTitle} />
        <div className="filter-fields">
          <Input
            label="Min Date:"
            type="number"
            className=""
            value={minYear}
            setValue={setMinYear}
          />
          <Input
            label="Max Date:"
            type="number"
            className=""
            value={maxYear}
            setValue={setMaxYear}
          />
          <SelectInput
            label="Sort:"
            options={SORT_OPTIONS}
            className=""
            value={sort}
            setValue={setSort}
          />
        </div>
      </div>
      <ul className="filter-tags">
        {GENRES.map((genre) => (
          <Tag
            key={genre}
            genre={genre}
            filter={true}
            genres={genres}
            setGenres={setGenres}
          />
        ))}
      </ul>
    </div>
  )
}

export default Filter
