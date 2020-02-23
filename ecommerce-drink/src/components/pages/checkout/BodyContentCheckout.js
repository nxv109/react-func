import React from "react";
import { useTranslation } from "react-i18next";

export default function BodyContentCheckout(props) {
  const { t } = useTranslation();

  return (
    <tbody>
      {props.listCart.map(item => (
        <tr key={item.id}>
          <td className="cart__photo">
            <img src={`./images/${item.image}`} alt="RƯỢU VANG ĐỎ" />
          </td>
          <td>{item.title.toUpperCase()}</td>
          <td>{item.price}$</td>
          <td
            className="detail__pro-select"
            style={{
              display: "flex",
              alignItems: "center",
              lineHeight: "100px",
              border: "none",
              justifyContent: "center"
            }}
          >
            <div>{t("Choosed")}:</div>{" "}
            <div
              style={{
                width: "40px",
                height: "20px",
                background: item.choosedColor,
                marginLeft: ".5rem"
              }}
            ></div>
          </td>
          <td className="detail__pro-select">
            <span>
              {t("Choosed")}: {t(item.choosedSize)}
            </span>
          </td>
          <td>{item.amount}</td>
          <td>{item.price * item.amount}$</td>
        </tr>
      ))}
    </tbody>
  );
}
