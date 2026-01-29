import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {
  return <div><h2>Home Section</h2><p>Welcome to the Home section!</p></div>;
};

const About = () => {
  return <div><h2>About Section</h2><p>This is the About section.</p></div>;
};

const Services = () => {
  return <div><h2>Services Section</h2><p>Here are our services.</p></div>;
};

const Contact = () => {
  return <div><h2>Contact Section</h2><p>Contact us here!</p></div>;
};

const App = () => {
  return (
    <Router>
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">My Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/">Home</Nav.Link>
              <Nav.Link as={Link} to="/about">About</Nav.Link>
              <Nav.Link as={Link} to="/services">Services</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <div className="container mt-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
