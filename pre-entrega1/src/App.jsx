import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar'
import ItemListContainer from './Components/ItemListContainer'

function App() {
  

  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Bienvenidos a DigiMart"} parrafo={"Tienda Nro 1 en tecnologia"}/>
    </>

    
    
  )
}

export default App
