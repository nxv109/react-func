import React, { useEffect, useState } from 'react';
import ListProducts from './components/ListProducts';
import YourOrders from './components/YourOrders';
import fetchData from './mixins/fetch';

import './App.css';

function App() {
  const [products, setProducts] = useState(Array);

  useEffect(() => {
    fetchData('http://localhost:5000/products')
      .then(res => res.json())
      .then(res => setProducts(res))
  }, []);

  return (
    <div className="container mt-5 p-2 shadow rounded">
      <div className="row">
        <div className="col col-lg-8">
          <YourOrders />
        </div>
        <div className="col col-lg-4">
          <ListProducts orders={products} />
        </div>
      </div>
    </div>
  );
}

export default App;
