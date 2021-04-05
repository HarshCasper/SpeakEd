  
import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './Navbar.elements';
import logo from './logo.jpg';
import { FaFontAwesomeLogoFull } from 'react-icons/fa';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={logo} width="70"  />
          
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/home' activeStyle>
            Home
          </NavLink>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/events' activeStyle>
            Events
          </NavLink>
          <NavLink to='/speakers' activeStyle>
            Speakers
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact-Us
          </NavLink>

          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>Login</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;