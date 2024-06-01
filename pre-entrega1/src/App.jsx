
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import ItemListContainer from './Components/ItemListContainer'
import NavBar from './Components/NavBar'
import ItemDetailContainer from './Components/ItemDetailContainer'
import Error404 from './Components/Error404'
import CartView from './Components/CartView'
import CartContextProvider from './Components/CartContext'

function App() {
  

  return (
    <CartContextProvider>
    <BrowserRouter>
    <NavBar/>
    <Routes>
    <Route exact path={"/"} element={<ItemListContainer greeting="Bienvenido a DigiMart" />}/>
    <Route exact path={"/category/:id"} element={<ItemListContainer/>}/>
    <Route exact path={"/item/:id"} element={<ItemDetailContainer/>}/>
    
    <Route exact path={"*"} element={<Error404/>}/>
    </Routes>
    </BrowserRouter>
    </CartContextProvider>
  

    
    
  )
}

export default App
