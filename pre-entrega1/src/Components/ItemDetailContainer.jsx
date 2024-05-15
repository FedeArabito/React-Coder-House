import React, { useEffect, useState } from 'react'
import arrayProductos from "../productos.json"
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const fetchItems = ()=>{
  return new Promise((resolve)=>{
    setTimeout(()=>{
      resolve(arrayProductos)
      console.log(arrayProductos);
    }, 700)
  })
};

const ItemDetailContainer = () => {


  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const {id} = useParams();
  
  useEffect(() => {
    const getApi = async ()=>{
      const data = await fetchItems()
      setProduct(id ? data.find(item => item.id === id) : data)
      setLoading(false)
    }
    getApi();
  }, [id]);

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
