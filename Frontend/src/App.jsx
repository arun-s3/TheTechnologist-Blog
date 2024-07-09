import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Dashboard from '../src/pages/Dashboard'
import Projects from '../src/pages/Projects'
import About from '../src/pages/About'

export default function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='/signin' element={<SignIn/>} />
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/dashboard' element={<Dashboard/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/about' element={<About/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}