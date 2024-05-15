import React, { useState } from 'react'
import '../Components/Estilos/Item.css'
import cart from '../assets/cart.svg'

const Item = ({id, title, image, category, price, }) => {
  
  const [showDetail, setDetail] = useState(false);

  const toggleDetail = ()=>{
    setDetail(!showDetail)
  }
  
  return (
    <div className='item-card'>
      <div className="item-title">
        <h2>{title}</h2>
      </div>
      <div className="item-img">
        <img src={image} alt="" />
      </div>
      <div className="item-info">
        <p>${price}</p>
        <img src={cart} alt="Carrito" />
      </div>
      <div className="item-ver-detalle">
        <a onClick={toggleDetail}>
          {showDetail ? '' : 'Ver Detalle'}
          </a>
          {showDetail &&(
            <>
            <div className="overlay" onClick={toggleDetail}></div>
            <div className="item-details show-details">
              <span className="close-button" onClick={toggleDetail}>X</span>
              <p>{description}</p>
            </div>
          </>
          )}
      </div>
    </div>
  )
}

export default Item
