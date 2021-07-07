import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const product = products.find(product => product.id === itemId) 
    setItem(product)
  }, [itemId, products])
  return (
    <div>
      <h1>{item?.title}</h1>
      <span>{item?.description}</span>
      <div><img src={item?.imageSrc} alt={item?.title} /></div>
      <div><Link to='/'>Volver al inicio</Link></div>
    </div>
  )
}

export default ItemDetail;