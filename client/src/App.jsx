import React from 'react'
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import DashBoard from './pages/DashBoard'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Header from './components/Header'
import Footer from './components/Footer'
//import projects from './pages/projects'


export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        
      <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/dashboard' element={<DashBoard />} />
      
      </Routes>
      <Footer/>
        </BrowserRouter>
    </div>
  )
}
