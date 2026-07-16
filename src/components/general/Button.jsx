import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './general.css'

function Button({ label, className, onClick, icon, type = 'button' }) {
  return (
    <button
      type={type}
      className={`button ${className || ''}`.trim()}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="button-icon" />}
      {label}
    </button>
  )
}

export default Button
