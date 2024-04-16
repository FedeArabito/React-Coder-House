import React from 'react'
import './NavBar.css'
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <nav>
      <div className="logo">Hola</div>
      <div className="buscador"></div>
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
