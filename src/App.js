import React from 'react'
import Navbar from './components/navbar/navbar'
import Hero from './components/navbar/hero/hero'
import About from './components/About/About'
import Services from './components/services'
import Tours from './components/tours'
import Foot from './components/footer'

const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <About></About>
      <Services></Services>
      <Tours></Tours>
      <Foot></Foot>
    </div>
  )
}

export default App