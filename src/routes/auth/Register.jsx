import { faUser, faKey, faPlus } from '@fortawesome/free-solid-svg-icons'
import Input from '../../components/general/Input'
import Button from '../../components/general/Button'
import './auth.css'

function Register({ username, password, setUsername, setPassword }) {
  return (
    <div className="auth-body register">
      <h2>Create a new account</h2>
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
      <Button label="Sign Up" className="auth-submit" icon={faPlus} type="submit" />
    </div>
  )
}

export default Register
