import React, { useState } from 'react';
import '../Components/Estilos/NavBar.css';
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
        <li><a onClick={()=> setBorder("Nike")} className= {border === "Nike" ?  "active" :  ""} href="#" >Nike</a></li>
        <li><a onClick={()=> setBorder("Adidas")} className= {border === "Adidas" ?  "active" :  ""} href="#" >Adidas</a></li>
        <li><a onClick={()=> setBorder("New Balance")} className= {border === "New Balance" ?  "active" :  ""} href="#" >New Balance</a></li>
        <li><a onClick={()=> setBorder("Topper")} className= {border === "Topper" ?  "active" :  ""} href="#" >Topper</a></li>
        <li><a onClick={()=> setBorder("Puma")} className= {border === "Puma" ?  "active" :  ""} href="#" >Puma</a></li>
      </ul>
      <CartWidget/>
    </nav>
  )
}

export default NavBar;
