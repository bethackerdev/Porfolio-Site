import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import bethackerlogo from '../assets/img/bethackerlogo.svg';
import navicon1 from '../assets/img/navicon1.png';
import navicon2 from '../assets/img/navicon2.png';
import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="xl" className={`sticky-top ${scrolled ? "scrolled" : ""}`}>
        <Navbar.Toggle aria-controls="basic-navbar-nao">
          <span className="navbar-toggler-icon "></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => handleUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
          </Nav>
          <Container>
         <span className="navbar-text">
              <div className="social-icon">
                <a href="#"><img src={navicon1} alt="" /></a>
                <a href="#"><img src={navicon2} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd">
                  <span>Let’s Connect</span>
                </button>
              </HashLink>
            </span>
          </Container>
        </Navbar.Collapse>
        <Navbar.Brand>
       <div class= "d-none d-lg-block">
              <img src={bethackerlogo} alt="Logo" />
              </div>
              </Navbar.Brand>
      </Navbar>
    </Router>
  );
};

