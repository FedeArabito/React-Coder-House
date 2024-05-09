import React, { useEffect, useState } from 'react'
import './ItemListContainer.css'
import { getApi } from '../../apiFetch'
import ItemList from './ItemList';


const ItemListContainer = ({ greeting, parrafo }) => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getApi()
      .then(res => {
        setProducts(res)
        console.log(res)
      })
  }, [])

  return (
    <section className='hero'>
      <div className='container'>
        <h1>{greeting}</h1>
        <p>{parrafo}</p>
        <ItemList products={products} />
      </div>
    </section>


  )
}

export default ItemListContainer;
