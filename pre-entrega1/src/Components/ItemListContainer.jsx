import React, { useEffect, useState } from 'react'
import '../Components/Estilos/ItemListContainer.css'
import ItemList from './ItemList';
import arrayProductos from "../productos.json"
import ItemDetailContainer from './ItemDetailContainer';


const fetchItems = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(arrayProductos)
      console.log(arrayProductos);
    }, 2000)
  })
};

const ItemListContainer = ({ greeting}) => {


  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const getApi = async ()=>{
      const data = await fetchItems()
      setProducts(data)
      setLoading(false)
    }
    getApi();
  }, []);

  return (
    <section className='hero'>
      <div className='container'>
        <h1>{greeting}</h1>
        <p>{loading
          ? <div>Cargando...</div>
          : 
        <ItemList category={"all"} products={products} />
      }</p>
      
      </div>
      <ItemDetailContainer/>
    </section>


  )
}

export default ItemListContainer;
