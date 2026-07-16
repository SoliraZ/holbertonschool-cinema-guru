import { faUser, faKey } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import './auth.css'

function Login({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body login">
      <h2>Sign in with your account</h2>
      <Input
        label="Username:"
        type="text"
        className="light"
        value={username}
        setValue={setUsername}
        icon={faUser}
      />
      <Input
        label="Password:"
        type="password"
        className="light"
        value={password}
        setValue={setPassword}
        icon={faKey}
      />
      <Button label="Sign In" className="auth-submit" icon={faKey} />
    </div>
  )
}

export default Login
