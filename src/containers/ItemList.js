import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemList = ({ products }) => {
  const { colorId } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    let productList;
    if (colorId) {
      productList = products.filter(product => product.color === colorId)
    } else {
      productList = products;
    }
    setList(productList)
  }, [colorId, products]);
  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <p>{item.category}</p>
          <p>{item.color}</p>
          <div><Link to={`/item/${item.id}`}>Ver detalles</Link></div>
        </div>))}
    </div>
  )
}

export default ItemList;