import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Views/Home/Home'
import Default from '../Layout/Default'
import Abouts from '../Views/abouts/Abouts'
import SignIN from '../Views/Auth/signIN/SignIN'
import SignUP from '../Views/Auth/signUP/SignUP'

const IndexRots = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Default/>} >
            <Route path='/' element={<Home/>} />
            <Route path='/abouts' element={<Abouts/>} />
          </Route>
          <Route path='/sign-in' element={<SignIN/>} />
          <Route path='/sign-up' element={<SignUP/>} />
        </Routes>
    </div>
  )
}

export default IndexRots