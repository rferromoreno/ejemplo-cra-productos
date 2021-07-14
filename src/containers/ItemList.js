import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemList = ({ products, filterBy }) => {
  const { id } = useParams();
  const [list, setList] = useState([]);
  useEffect(() => {
    let productList;
    if (id && filterBy) {
      productList = products.filter(product => product[filterBy] === id)
    } else {
      productList = products;
    }
    setList(productList)
  }, [id, products, filterBy]);
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