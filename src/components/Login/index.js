import {useState} from 'react'

const Login = () => {
  const {name, setName} = useState('')
  const {password, setPassword} = useState('')
  const onClickSubmmit = e => {
    e.preventDefault()
  }
  return (
    <form onSubmit={onClickSubmmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          className="form-control"
          onChange={e => setName(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          className="form-control"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button>submit</button>
    </form>
  )
}

export default Login
