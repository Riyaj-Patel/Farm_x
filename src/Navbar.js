import React, { Component } from 'react';
import './Navbar.css';
import {
   Navbar,
   Nav,
 
    

} from 'react-bootstrap';
import PropTypes from 'prop-types';

class Navibar extends Component {
    render() {
        return (
          <Navbar collapseOnSelect expand="lg" bg="light" className="pb-1">
  <Navbar.Brand href="#home" className="navbar-brand">
    <img
        src="./acro-logo.jpg"
        width="50"
        height="50"
        className="d-inline-block align-top"
        alt="Acro-xf logo"
      />
      Acro-XF
      </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#pricing">Services</Nav.Link>
      <Nav.Link href="#home">Contact us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar> 
//       {<header>
  //       <nav className="navbar navbar-expand-sm navbar-dark fixed-top">
  // <a className="navbar-brand" href="#">Acro-XF</a>
  // <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#Navbar" 
  // aria-controls="navbarSupportedContent" 
  // aria-expanded="false" 
  // aria-label="Toggle navigation">
  //   <span className="navbar-toggler-icon"></span>
  // </button>

  // <div className="collapse navbar-collapse"  id="Navbar">
  //   <ul className="navbar-nav ml-auto">
  //     <li className="nav-item active">
  //       <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
  //     </li>
  //     <li className="nav-item">
  //       <a className="nav-link" href="#">Contact</a>
  //     </li>
  //     <li className="nav-item dropdown">
  //       <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  //         Services
  //       </a>
  //       <div className="dropdown-menu" aria-labelledby="navbarDropdown">
  //         <a className="dropdown-item" href="#">Action</a>
  //         <a className="dropdown-item" href="#">Another action</a>
  //         <div className="dropdown-divider"></div>
  //         <a className="dropdown-item" href="#">Something else here</a>
  //       </div>
  //     </li>
      
  //   </ul>
  //   {/* <form className="form-inline my-2 my-lg-0">
  //     <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
  //     <button className="btn btn-outline-primary my-2 my-sm-0" type="submit">Search</button>
  //   </form> */}
  //   </div>
  //   </nav>
  //   </header>}
        );
    }
}

Navbar.propTypes = {

};

export default Navibar;