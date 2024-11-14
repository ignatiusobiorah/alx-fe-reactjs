import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{border: "2px solid orange"}}>
        <Link style={{padding: "20px"}} to="/">Home</Link>
        <Link style={{padding: "20px"}}  to="/about">About</Link>
        <Link style={{padding: "20px"}}  to="/services">Services</Link>
        <Link style={{padding: "20px"}}  to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar;