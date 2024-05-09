import React from 'react'
import Item from './Item'
import './ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='listgroup'>
      {products.map(prod => <Item key={prod.id} {...prod} />)}
    </div>
  )
}

export default ItemList
