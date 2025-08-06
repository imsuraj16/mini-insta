import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import CreatePost from '../pages/CreatePost'
import Login from '../pages/Login'
import Register from '../pages/Register'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Explore/>}/>
      <Route path='/createpost' element = {<CreatePost/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
    </Routes>
  )
}

export default Mainroutes
