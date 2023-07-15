import { useState } from 'react'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './Home';
import LoginPage from './Login';
import { BrowserRouter } from "react-router-dom";

function App() {
  const [token, setToken] = useState("")

  return (
    <BrowserRouter>
    <Routes>
      <Route path={'home'} element={<HomePage token={token} />} />
      <Route path={'login'} element={<LoginPage setToken={setToken}/>} />
    </Routes>
    </BrowserRouter>
  )
}

export default App
