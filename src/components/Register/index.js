import {useState} from 'react'
import axios from 'axios'

const Regsiter = () => {
  const {names, setNames} = useState('')
  const {passwords, setPasswords} = useState('')
  const onClickSubmmit = e => {
    e.preventDefault()
    axios
      .post('http://localhost:5000/register', names, passwords)
      .then(result => console.log(result))
      .catch(err => console.log(err))
  }
  return (
    <form onSubmit={onClickSubmmit}>
      <div className="form-group">
        <label htmlFor="username">Username</label>
        <input type="text" onChange={e => setNames(e.target.value)} />
      </div>

      <div className="form-group">
        <label htmlFor="password">Password</label>
        <input type="password" onChange={e => setPasswords(e.target.value)} />
      </div>
      <button>submit</button>
    </form>
  )
}

export default Regsiter
