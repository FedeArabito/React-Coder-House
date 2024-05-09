import React from 'react'
import './Item.css'

const Item = ({id, title, image, category, price, description}) => {
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
        
      </div>
    </div>
  )
}

export default Item
