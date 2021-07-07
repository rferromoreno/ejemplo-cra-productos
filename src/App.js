import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetail from './containers/ItemDetail';
import ItemList from './containers/ItemList';
import getProducts from './api/getProducts';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProducts().then(data => setProducts(data))
  }, [])
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path='/item/:itemId'><ItemDetail products={products} /></Route>
          <Route path='/category/:categoryId'><ItemList products={products} /></Route>
          <Route exact path='/'><ItemList products={products} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
