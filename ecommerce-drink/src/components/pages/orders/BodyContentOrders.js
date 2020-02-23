import React from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function BodyContentOrders(props) {
  const { t } = useTranslation();

  return (
    <tbody>
      {props.listOrders.map(item => (
        <tr key={item.id}>
          <td className="cart__photo">
            <img src={`./images/${item.image}`} alt="RƯỢU VANG ĐỎ" />
          </td>
          <td>{item.title.toUpperCase()}</td>
          <td>{item.price}$</td>
          <td>{item.amount}</td>
          <td>
            {item.status === 1 ? t("Order placed") : item.status === 2 ? t("Delivering") : item.status === 3 ? t("Delivered") : null}
          </td>
          <td>
            <Link to={`/orders-details/${item.id}`}>{t("Orders details")}</Link>
          </td>
        </tr>
      ))}
    </tbody>
  );
}
