import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Explore from '../pages/Explore'
import CreatePost from '../pages/CreatePost'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Profile from '../pages/Profile'

const Mainroutes = () => {
  return (
    <Routes>
      <Route path='/' element = {<Explore/>}/>
      <Route path='/createpost' element = {<CreatePost/>}/>
      <Route path='/login' element = {<Login/>}/>
      <Route path='/register' element = {<Register/>}/>
      <Route path='/profile' element = {<Profile/>}/>
    </Routes>
  )
}

export default Mainroutes
