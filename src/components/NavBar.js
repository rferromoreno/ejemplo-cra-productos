import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => (
  <nav className="nav-bar">
    <Link className="link" to='/'>Inicio</Link>
    <Link className="link" to='/color/Blanco'>Productos en Blanco</Link>
    <Link className="link" to='/color/Negro'>Productos en Negro</Link>
    <Link className="link" to='/category/Madera'>Productos de Madera</Link>
    <Link className="link" to='/category/Ladrillo'>Productos de Ladrillo</Link>
  </nav>
);

export default NavBar;