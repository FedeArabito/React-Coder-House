import React, { useEffect, useState } from 'react'
import arrayProductos from "../productos.json"
import ItemDetail from './ItemDetail';

const fetchItems = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      const product = arrayProductos.find(item => item.id === 2);
      resolve(product)
    }, 2000)
  })
};

const ItemDetailContainer = () => {


  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    const getApi = async ()=>{
      const data = await fetchItems()
      setProduct(data)
      setLoading(false)
    }
    getApi();
  }, []);

  return (
    <div>

      {loading
          ? <div>Cargando...</div>
          : 
        <ItemDetail  product={product} />
      }
      
    </div>
  )
}

export default ItemDetailContainer
