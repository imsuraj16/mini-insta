import React from 'react'
import Nav from './components/Nav'
import Mainroutes from './routes/Mainroutes'

const App = () => {
  return (
    <div className='w-full min-h-screen py-[2rem] bg-black text-white'>
      <Nav/>
      <Mainroutes/>
    </div>
  )
}

export default App
