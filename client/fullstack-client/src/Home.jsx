import { useEffect } from 'react'
import { Navigate } from 'react-router-dom'
import axios from 'axios'

const HomePage = (props) => {
  const { token } = props

  useEffect(() => {
    axios.get('http://localhost:8080/getJobLists', { headers: {
      'authorization': `Bearer ${token}`
    }})
  }, [])

  if (!token) {
    return (
      <Navigate to="/login" replace />
    )
  }

  return (
    <div>HomePage page</div>
  )
}

export default HomePage