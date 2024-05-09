import React, { useState } from 'react';
import './NavBar.css';
import logo from '../assets/DigiMart.png';
import '../assets/DigiMart.png';
import CartWidget from './CartWidget';

const NavBar = () => {

  const [border, setBorder] = useState("Home")

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="" />
        <div>DigiMart</div>
      </div>
      
      <ul>
        <li><a onClick={()=> setBorder("Home")} className= {border === "Home" ?  "active" :  ""} href="#" >Home</a></li>
        <li><a onClick={()=> setBorder("Servicios")} className= {border === "Servicios" ?  "active" :  ""} href="#" >Servicios</a></li>
        <li><a onClick={()=> setBorder("Nosotros")} className= {border === "Nosotros" ?  "active" :  ""} href="#" >Nosotros</a></li>
        <li><a onClick={()=> setBorder("Donde Estamos")} className= {border === "Donde Estamos" ?  "active" :  ""} href="#" >Donde Estamos</a></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
