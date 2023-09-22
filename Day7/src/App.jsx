import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import Patient from './pages/Patient'
import Doctor from './pages/Doctor'
import Home from './pages/Home'
import Appointment from './pages/Appointment'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'


function App() {
  return (
   <>
   <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/Login' element={<Login/>}/>
    <Route exact path='/Register' element={<Register/>}/>
    <Route exact path='/Dashboard'element={<Dashboard/>} />
    <Route exact path='/Patients' element={<Patient/>}/>
    <Route exact path='/Doctors' element={<Doctor/>}/>
    <Route exact path='/Appointment' element={<Appointment/>}/>
    <Route exact path='/AboutUs' element={<AboutUs/>}/>
    <Route exact path='/Contact' element={<Contact/>}/>
    
  
    
   </Routes>
   
   </>
  )
}

export default App