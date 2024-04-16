import React from 'react';
import './NavBar.css';
import logo from '../assets/DigiMart.png';
import '../assets/DigiMart.png';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <div>DigiMart</div>
      </div>
      
      <ul>
        <li><a href="#" >Home</a></li>
        <li><a href="#" >Servicios</a></li>
        <li><a href="#" >Nosotros</a></li>
        <li><a href="#" >Donde Estamos</a></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
