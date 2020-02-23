import React from "react";

export default function BodyContentProducts({ products }) {

  return (
    <tbody>
      {products.map(item => (
        <tr key={item.id}>
          <td className="cart__photo" style={{ width: "70px" }}>
            <img
              src={`http://localhost:3000/images/${item.images[0]}`}
              alt="RƯỢU VANG ĐỎ"
            />
          </td>
          <td>{item.title}</td>
          <td>{item.price}$</td>
          <td>
            <i className="far fa-trash-alt" />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
