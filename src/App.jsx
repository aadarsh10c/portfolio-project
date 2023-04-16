import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import SocialLinks from './components/SocialLinks'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Expierience from './components/Expierience'
import Contact from './components/Contact'

function App() {

  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Expierience />
      <Contact />
      <SocialLinks />
    </div>
  )
}

export default App
