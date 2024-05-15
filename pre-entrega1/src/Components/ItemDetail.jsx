import React from 'react'
import "../Components/Estilos/ItemDetail.css"
import ItemCount from './ItemCount'


const ItemDetail = ({product}) => {
  return (
<div className="item-detail">
      <div className="item-image">
        <img src={product.image} alt={product.title} />
      </div>
      <div className="item-info">
        <h2 className="item-title">{product.title}</h2>
        <p className="item-description">{product.description}</p>
        <p className="item-price">${product.price}</p>
        <button className="item-button">Comprar</button>
        <ItemCount stock={product.stock}/>
      </div>
    </div>
  )
}

export default ItemDetail
