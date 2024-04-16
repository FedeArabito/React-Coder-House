import React from 'react'
import './CartWidget.css'
import cart from '../assets/cart.svg'

const CartWidget = () => {
  return (
    <>
    <div className='cart'>
      <img src={cart} alt="Imagen Carrito" srcset="" />
      <span className='cart-counter'>5</span>
    </div>

    </>
  )
}

export default CartWidget
