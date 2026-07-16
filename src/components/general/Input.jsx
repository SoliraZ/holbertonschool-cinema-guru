import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './general.css'

function Input({ label, type, className, value, setValue, icon, inputAttributes }) {
  const handleInput = (event) => {
    setValue(event.target.value)
  }

  return (
    <div className={`input ${className || ''}`.trim()}>
      <div className="input-header">
        {icon && <FontAwesomeIcon icon={icon} className="input-icon" />}
        <label>{label}</label>
      </div>
      <input
        type={type}
        value={value}
        onChange={handleInput}
        {...inputAttributes}
      />
    </div>
  )
}

export default Input
