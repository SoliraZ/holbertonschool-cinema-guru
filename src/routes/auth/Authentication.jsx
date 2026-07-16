import { useState } from 'react'
import axios from 'axios'
import Button from '../../components/general/Button'
import Login from './Login'
import Register from './Register'
import './auth.css'

function Authentication({ setIsLoggedIn, setUserUsername }) {
  const [_switch, setSwitch] = useState(true)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleSwitch = (value) => {
    setSwitch(value)
    setUsername('')
    setPassword('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const route = _switch ? 'login' : 'register'

    axios
      .post(`http://localhost:8000/api/auth/${route}`, {
        username,
        password,
      })
      .then((response) => {
        localStorage.setItem('accessToken', response.data.accessToken)
        setUserUsername(username)
        setIsLoggedIn(true)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <form className="authentication" onSubmit={handleSubmit}>
      <div className="auth-header">
        <Button
          label="Sign In"
          className={_switch ? 'selected' : ''}
          onClick={() => handleSwitch(true)}
        />
        <Button
          label="Sign Up"
          className={_switch ? '' : 'selected'}
          onClick={() => handleSwitch(false)}
        />
      </div>
      {_switch ? (
        <Login
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      ) : (
        <Register
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
      )}
    </form>
  )
}

export default Authentication
