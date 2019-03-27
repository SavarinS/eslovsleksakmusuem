import React, { Component } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';

class Navigation extends Component {

    render(){
        return (
            
              <Navbar expand="lg">
              <div className="page-title">
                  <Navbar.Brand ><NavLink to="/"> Eslöv Leksakmusuem </NavLink></Navbar.Brand>
              </div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-autot">
    
                <NavLink to="omoss"> Om oss</NavLink>
                <NavLink to="samligar"> Samligar</NavLink>
                <NavLink to="modeljarnvagen"> Modeljärnvägen</NavLink>
                <NavLink to="galleri"> Galleri</NavLink>
                <NavLink to="kontakt"> Kontakt</NavLink>
                </Nav>
    
                </Navbar.Collapse>
              </Navbar>
            
        )
    }

}

export default Navigation;
