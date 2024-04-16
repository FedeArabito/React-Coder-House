import React from 'react'
import './ItemListContainer.css'


const ItemListContainer = ({ greeting, parrafo }) => {
  return (
    <section className='hero'>
      <div className='container'>
        <h1>{greeting}</h1>
        <p>{parrafo}</p>
      </div>
    </section>


  )
}

export default ItemListContainer;
