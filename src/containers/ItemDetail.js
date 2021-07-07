import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = ({ products }) => {
  const { itemId } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    const product = products.find(product => product.id === itemId) 
    setItem(product)
  }, [itemId, products])
  return (
    <div>
      <h1>{item.title}</h1>
      <span>{item.description}</span>
      <img src={item.imageUrl} alt={item.title} />
    </div>
  )
}

export default ItemDetail;