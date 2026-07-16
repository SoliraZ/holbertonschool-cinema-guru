import './general.css'

function SearchBar({ title, setTitle }) {
  const handleInput = (event) => {
    setTitle(event.target.value)
  }

  return (
    <input
      className="search-bar"
      type="text"
      value={title}
      onChange={handleInput}
      placeholder="Seach Movies"
    />
  )
}

export default SearchBar
