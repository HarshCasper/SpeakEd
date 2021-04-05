import React from 'react'
import {BrowserRouter as Router , Switch , Route} from 'react-router-dom'

import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
// import Header from './components/Navbar/Header'
import Organizations from './components/Organizations/Organizations'
import Speakers from './components/Speakers/Speakers'
import SpeakersOpinion from './components/SpeakersOpinion/SpeakersOpinion'
// import Welcome from './components/WelcomePage/Welcome'

function App() {
  return (
    <Router className="App">
  
        {/* Header */}
        {/* <Header></Header> */}
    <Switch>
      <Route path = '/'>
        {/* welcome page */}

        {/* <Welcome></Welcome> */}

        {/* About us intro */}
          <AboutUs></AboutUs>
        {/* Featured Speakers */}
          
          <Speakers></Speakers>
        {/* Orgaizations */}
      
          <Organizations></Organizations>
          {/* Speakers opinion */}
          <SpeakersOpinion></SpeakersOpinion>
        
        {/* Footer */}

        {/* Contact us */}
      </Route>
    </Switch>
  </Router>
  )
}

export default App



