import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemList = ({ products }) => {
  const { categoryId } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    let productList;
    if (categoryId) {
      productList = products.filter(product => product.category === categoryId)
    } else {
      productList = products;
    }
    setList(productList)
  }, [categoryId, products]);
  return (
    <div>
      {list.map(item => (
        <div key={item.id}>
          <h1>{item.title}</h1>
          <span>{item.category}</span>
          <div><Link to={`/item/${item.id}`}>Ver detalles</Link></div>
        </div>))}
    </div>
  )
}

export default ItemList;