import React, { Component } from 'react';
import './Navbar.css';
import {
   Navbar,
   Nav,
    

} from 'react-bootstrap';
import HomeIcon from '@material-ui/icons/Home';
import InfoIcon from '@material-ui/icons/Info';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import AccessibilityIcon from '@material-ui/icons/Accessibility';
import {NavLink} from "react-router-dom";

class Navibar extends Component {
    render() {
        return (
<Navbar collapseOnSelect expand="lg" bg="light" className="pb-1">
  <Navbar.Brand exact href="/" className="navbar-brand">
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
      <Nav.Link><NavLink exact activeClassName='menu' to="/"><HomeIcon/> Home</NavLink></Nav.Link>
      <Nav.Link><NavLink exact activeClassName='menu' to="/service"><AccessibilityIcon/> Services</NavLink></Nav.Link>
      <Nav.Link><NavLink exact activeClassName='menu' to="/about"><InfoIcon/> About us</NavLink></Nav.Link>
      <Nav.Link><NavLink exact activeClassName='menu' to="/contact"><PermContactCalendarIcon/> Contact us</NavLink></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
        );
    }
}

Navbar.propTypes = {

};

export default Navibar;
