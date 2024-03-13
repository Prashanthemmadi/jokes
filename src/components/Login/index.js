import {useState} from 'react'
import {useHistory} from 'react-router-dom'
import './index.css'

const Login = () => {
  const [showPassword, isShowPassword] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)
  const history = useHistory()

  const nameChange = e => {
    setName(e.target.value)
  }

  const passwordChange = e => {
    setPassword(e.target.value)
  }

  const showPass = () => {
    isShowPassword(!showPassword)
  }

  const login = e => {
    e.preventDefault()
    if (!name && !password) {
      setError(true)
    } else {
      setError(false)
      history.replace('/')
    }
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center login-card">
      <div className="p-3 form shadow">
        <form onSubmit={login}>
          <label htmlFor="username" className="label">
            USERNAME
          </label>
          <br />
          <input
            type="text"
            id="username"
            className="input mb-2 mt-1"
            required
            placeholder="Username"
            onChange={nameChange}
            value={name}
          />
          <br />
          <label htmlFor="password" className="label">
            PASSWORD
          </label>
          <br />
          {showPassword ? (
            <input
              type="text"
              id="password"
              className="input mb-2 mt-1"
              placeholder="Password"
              onChange={passwordChange}
              value={password}
              required
            />
          ) : (
            <input
              type="password"
              id="password"
              className="input mb-2 mt-1"
              placeholder="Password"
              onChange={passwordChange}
              value={password}
              required
            />
          )}
          <br />
          <input
            type="checkbox"
            onChange={showPass}
            id="show"
            className="check"
          />
          <label htmlFor="show" className="label">
            Show Password
          </label>
          <br />

          <button type="submit" className="login-btn p-2 mb-1">
            Login
          </button>

          {error && <p className="error mb-3">Enter All Details</p>}
        </form>
      </div>
    </div>
  )
}

export default Login
