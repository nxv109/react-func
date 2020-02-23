import React from "react";
import { useTranslation } from "react-i18next";

const rootUrl = "http://localhost:3000";

export default function BodyContentOrdersDetails({ listOrdersDetails }) {
  const { t } = useTranslation();

  if (!listOrdersDetails) {
    return null;
  }

  return (
    <>
      <tbody>
        <tr key={listOrdersDetails.id}>
          <td className="cart__photo">
            <img
              src={`${rootUrl}/images/${listOrdersDetails.image}`}
              alt="RƯỢU VANG ĐỎ"
            />
          </td>
          <td>{listOrdersDetails.title}</td>
          <td>{listOrdersDetails.price}$</td>
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
                background: listOrdersDetails.choosedColor,
                marginLeft: ".5rem"
              }}
            ></div>
          </td>
          <td className="detail__pro-select">
            <span>
              {t("Choosed")}: {t(listOrdersDetails.choosedSize)}
            </span>
          </td>
          <td>{listOrdersDetails.amount}</td>
          <td>{listOrdersDetails.price * listOrdersDetails.amount}$</td>
        </tr>
      </tbody>
    </>
  );
}
