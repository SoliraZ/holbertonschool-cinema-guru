import './general.css'

function SelectInput({ label, options, className, value, setValue }) {
  const handleSelect = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={`select-input ${className || ''}`.trim()}>
      <label>{label}</label>
      <select value={value} onChange={handleSelect}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}

export default SelectInput
