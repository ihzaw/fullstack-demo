import { useState } from "react"
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

const LoginPage = (props) => {
  const { setToken } = props

  const navigate = useNavigate()

  const [form, setForm] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    e.preventDefault()
    const {name, value} = e.target
    const newForm = {
      ...form,
      [name]: value
    }
    setForm(newForm)
  }

  const submit = async (e) => {
    try {
      e.preventDefault()
      const response = await axios.post('http://localhost:8080/login', form)
      const { token } = response.data
      setToken(token)
      navigate('/home')
    } catch (err) {
      console.log('err :', err)
    }
  }

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <div className="mb-8">
          <div htmlFor="username">Username</div>
          <input name="username" className='border border-slate-600 px-2 py-1 rounded-sm' type="text" onChange={(e) => handleChange(e)} value={form.username}/>
        </div>
        <div className="mb-8">
          <div htmlFor="password">Password</div>
          <input name="password" className='border border-slate-600 px-2 py-1 rounded-sm' type="text" onChange={(e) => handleChange(e)} value={form.password}/>
        </div>
        <button type="submit" className="hidden">submit</button>
      </form>
    </div>
  )
}

export default LoginPage