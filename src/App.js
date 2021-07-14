import React, { useEffect, useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import ItemDetail from './containers/ItemDetail';
import ItemList from './containers/ItemList';
import NavBar from './components/NavBar';
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
      <NavBar/>
        <Switch>
          <Route path='/item/:itemId'><ItemDetail products={products} /></Route>
          <Route path='/color/:id'><ItemList products={products} filterBy="color" /></Route>
          <Route path='/category/:id'><ItemList products={products} filterBy="category" /></Route>
          <Route exact path='/'><ItemList products={products} /></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
