import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getProduct, resetProduct } from '../actions/order.action';
import fetchData from '../mixins/fetch';

export default function ListProducts({ orders }) {
  const [products, setProducts] = useState(Array);
  const appState = useSelector(state => state);
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(orders)
  }, [orders]);

  const handleAdd = (id, e) => {
    const getPro = products.find(product => product.id === id);
    const listProducts = appState.orders.products;
    let amount = e.target.value;

    // update amount
    products.forEach(v => {
      if (v.id === id) {
        v.amount = amount;
      }
    });

    dispatch(getProduct(getPro, listProducts, amount));
  };

  const handleReset = () => {
    fetchData('http://localhost:5000/products')
      .then(res => res.json())
      .then(res => setProducts(res))

    dispatch(resetProduct());
  };

  return (
    <React.Fragment>
      <div className="mb-2 box-your-pizza">
        <span>Your pizza:</span>
        <span className="badge badge-pill badge-dark">{appState.orders.total} $</span>
        <button onClick={handleReset} type="button" className="btn btn-warning btn-sm">
          Reset pizza
        </button>
      </div>
      <ul className="list-group">
        {products.map(product => (
          <li key={product.id} className="list-group-item box-your-pizza">
            <div>
              <div className="font-weight-bold">{product.title.toUpperCase()}</div>
              <div>
                {product.price} $
              </div>
            </div>
            <div className="form-group">
              <div style={{width: "80px"}}>
                <input
                  className="form-control"
                  type="number"
                  value={product.amount}
                  onChange={(e) => handleAdd(product.id, e)}
                  min="0"
                  max="5"
                />
              </div>
            </div>
          </li>
        ))}
        <li className="list-group-item box-your-pizza">
          <div>
            Total
          </div>
          <div>
            {appState.orders.total} $
          </div>
        </li>
        <li className="list-group-item">
          <button className="btn btn-primary btn-sm">Checkout</button>
        </li>
      </ul>
    </React.Fragment>
  );
}
