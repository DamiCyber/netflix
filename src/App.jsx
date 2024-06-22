import React from 'react'
import Login from './component/Login'
import Home from './component/Home'
import Trending from './component/Trending'
import { Route, Routes } from 'react-router-dom'
const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/trending" element={<Trending/>} />
     </Routes>
    </>
  )
}

export default App