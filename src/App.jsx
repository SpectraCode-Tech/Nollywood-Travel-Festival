import React from 'react'
import Hero from './Components/Hero'
import About from './Components/About'
import Speakers from './Components/Speakers'
import Register from './Components/Register'
import Contacts from './Components/Contacts'
import Footer from './Components/Footer'
import OrganizerSlider from './Components/Organizers'
import Gallery from './Components/Gallery'
import Sponsors from './Components/Sponsors'
import Films from './Components/Films'


const App = () => {
  return (
    <div>
      <Hero />
      <About />
      <OrganizerSlider />
      <Speakers />
      <Register />
      <Films />
      <Gallery />
      <Sponsors />
      <Contacts />
      <Footer />
    </div>
  )
}

export default App
