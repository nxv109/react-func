import React from "react";
import { useSelector } from "react-redux";

export default function YourOrders() {
  const appState = useSelector(state => state);

  if (appState.orders.products.length === 0) {
    return (
      <>
        <h3>Your orders</h3>
        <div className="alert alert-light p-0" role="alert">
          No item!
        </div>
      </>
    );
  }

  return (
    <>
      <h3>Your orders</h3>
      <div className="box-your-pizza1">
        {appState.orders.products.map(product =>
          product.amount === 0 || product.amount === "0" ? null : (
            <div key={product.id} className="box-image">
              <img
                src={`./images/${product.image}`}
                alt={product.title}
                width="200px"
                height="200px"
              />
            </div>
          )
        )}
      </div>
    </>
  );
}
