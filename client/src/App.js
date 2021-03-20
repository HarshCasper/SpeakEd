import React from 'react';
import './App.css';
import Header from './components/Navbar/Header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {FooterContainer} from './containers/footer'
//import SocialMedia from './components/icons/SocialMedia';
// Welcome
import Welcome from './components/Welcome/Welcome'

function App() {
  return (
    <>
    <Router>
      {/* <Navbar />  */}
      <Header></Header>

    <Route path = '/'>

      <Welcome></Welcome>
    </Route>

    {/* <Welcome/> */}
    <FooterContainer/>
    
    </Router>

    </ >
  );
}

export default App;

