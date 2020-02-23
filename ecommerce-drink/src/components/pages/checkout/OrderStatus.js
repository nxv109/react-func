import React from "react";
import { useTranslation } from "react-i18next";

export default function OrderStatus({ total, address }) {
  const { t } = useTranslation();

  return (
    <>
      <hr />
      <hr />
      <h2 className="m-t-1">{t("Order status")}</h2>
      <div className="m-b-5 m-t-5" style={{ fontSize: "2rem" }}>
        <ul>
          <li><span className="m-r-3">{t("Address")}:</span> <span>{address}</span></li>
          <li><span className="m-r-3">{t("Total")}:</span> <span>{total}$</span></li>
          <li><span className="m-r-3">{t("Transport fee")}:</span> <span>20$</span></li>
          <li><span className="m-r-3">{t("Total payment")}:</span> <span>{total + 20}$</span></li>
        </ul>
      </div>
    </>
  );
}
