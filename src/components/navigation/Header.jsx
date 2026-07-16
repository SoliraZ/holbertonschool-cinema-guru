import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons'
import './navigation.css'

function Header({ userUsername, setIsLoggedIn }) {
  const logout = () => {
    localStorage.removeItem('accessToken')
    setIsLoggedIn(false)
  }

  return (
    <nav className="header">
      <p className="header-title">Cinema Guru</p>
      <div className="header-right">
        <img
          className="header-avatar"
          src="https://picsum.photos/100/100"
          alt="User avatar"
        />
        <p className="header-welcome">Welcome, {userUsername}!</p>
        <span className="header-logout" onClick={logout}>
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </span>
      </div>
    </nav>
  )
}

export default Header
