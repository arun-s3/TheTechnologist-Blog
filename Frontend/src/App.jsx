import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from '../src/pages/Home'
import SignIn from '../src/pages/SignIn'
import SignUp from '../src/pages/SignUp'
import Dashboard from '../src/pages/Dashboard'
import Blogs from './pages/Blogs'
import Categories from './pages/Categories'
import About from '../src/pages/About'
import Contact from '../src/pages/Contact'
import Header from './Components/Header'

export default function App(){
  return(
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/'>
          <Route index element={<Home/>} />
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='dashboard' element={<Dashboard/>} />
          <Route path='blogs' element={<Blogs/>} />
          <Route path='Categories' element={<Categories/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}