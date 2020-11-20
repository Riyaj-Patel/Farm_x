import React, {useEffect, useState } from 'react';
import './Navbar.css';
import {
  Navbar,
  Nav,


} from 'react-bootstrap';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import DashboardIcon from '@material-ui/icons/Dashboard';

import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import { NavLink } from "react-router-dom";
import SignupModel from './SignupModel';
import { useSelector } from "react-redux";
const Navibar = () => {
  
  const [currentUser,setuser]=useState(null); 
  const User = useSelector((state) => {
      if (Object.keys(state.acc).length === 0) {
        return;
      }
      else{
        return state.acc;
        
      }  
    });
  
  
  useEffect(() =>{ 
  if (User && User.isAuthenticated){
    setuser(User.user);
    //console.log("user at profile",User.user); 
  }
  
  
  }, [User]);

  
    return (
          <>
        <Navbar collapseOnSelect expand="lg" bg="light" className="pb-1">
          <Navbar.Brand href="/" className="navbar-brand">
            <img
              src={process.env.PUBLIC_URL + 'Acro-Logo.png'}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="Acro-xf logo"
            />
      Acro-
      <span className="green">
              XF
      </span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto mr-auto">
              <Nav.Link><NavLink exact activeClassName='menu' to="/"><HomeIcon /> Home</NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName='menu' to="/service"><AccessibilityIcon /> Services</NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName='menu' to="/about"><InfoIcon /> About us</NavLink></Nav.Link>
              <Nav.Link><NavLink exact activeClassName='menu' to="/contact"><PermContactCalendarIcon /> Contact us</NavLink></Nav.Link>              
              { currentUser?
              <Nav.Link><NavLink exact activeClassName='menu' to="/profile"><DashboardIcon /> Dashboard </NavLink></Nav.Link>
                :<Nav.Link><NavLink exact activeClassName='menu' to="/login"><AccountCircleIcon /> Join us! </NavLink></Nav.Link>
              }

            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <SignupModel />
        
</>
        );
    
}



export default Navibar;
