import React from "react";
import { useTranslation } from "react-i18next";

export default function StatusFlow({ status, createDate }) {
  const { t } = useTranslation();
  let statusFlow = [];

  for (let i = 1; i < 4; i++) {
    let statusStyle = "status";

    if (status >= i) {
      statusStyle += " status-checked";
    }

    statusFlow.push(
      <div className={`${statusStyle} status-flow`} key={i}>
        {i === 1
          ? t("Order placed")
          : i === 2
          ? t("Delivering")
          : i === 3
          ? t("Delivered")
          : null}
        <div className={`${statusStyle} status-item`}></div>
      </div>
    );
  }

  return <>{statusFlow}</>;
}
