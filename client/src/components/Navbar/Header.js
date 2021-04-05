import React from 'react'
import Headroom from 'react-headroom'
import { BrowserRouter as Router, Link, NavLink } from 'react-router-dom';

// import speaked json data
import {welcomePage , aboutusData , speakersData ,contactData,eventsData } from '../../SpeakEd'
import './Header.css'

function Header() {

    
    const viewWelcome = welcomePage.display;
    const viewAboutUs = aboutusData.display;
    const viewSpeakers = speakersData.display;
    const viewContact = contactData.display;
    const viewEvents = eventsData.display;

    return (
          <Router>
        <div>
            {/* install headroom  */}
            <Headroom>
                <header className = 'header'>
                <a href="" id = 'splash' className="logo"></a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{ color: 'white' }}
        >
          <span className='navicon'></span>
        </label>
                    {/* logo */}

                    {/* components */}

                    <ul className = 'menu'> 
              {viewWelcome && (
              <li>
               <a href="#home">Home</a>
              </li>
              )}
              {viewAboutUs && (
              <li>
               <a href="#aboutus">About</a>
              </li>
              )}

          {viewSpeakers && (
            <li>
              <a href="#speakers">Speakers</a>
            </li>
          )}

          {viewEvents && (
            <li>
              <a href = '#events'>Events</a>
            </li>
          )}
          {
            viewContact && (

          <li>
            <a href="#contact">Contact Us</a>
          </li>
            )
          }
          {
  }

  </ul>

                </header>
            </Headroom>
        </div>
        </Router>
    )
}

export default Header
