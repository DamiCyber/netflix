import React from 'react'
import Login from './component/Login'
import Home from './component/Home'
import Trending from './component/Trending'
import { Route, Routes } from 'react-router-dom'
import Trailers from './component/Trailers'
import Hot from './component/Hot'
const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending/>} />
        <Route path="/trailer" element={<Trailers/>} />
        <Route path="/hotmovies" element={<Hot/>} />
     </Routes>
    </>
  )
}

export default App