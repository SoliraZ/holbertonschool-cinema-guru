import { useState } from 'react'
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

  return (
    <form className="authentication" onSubmit={(event) => event.preventDefault()}>
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
