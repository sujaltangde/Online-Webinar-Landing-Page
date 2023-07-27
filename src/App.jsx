import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Home } from './components/Home'
import { Details } from './components/Details'
import { Register } from './components/Register'
import { Agenda } from './components/Agenda'
import { Speakers } from './components/Speakers'
import { Footer } from './components/Footer'


function App() {

  return (
    <>   

        <Navbar/>   
        <Home/>
        <Details/>
        <Register/>
        <Agenda/>
        <Speakers/>
        <Footer />
     
    </>
  )
}

export default App
