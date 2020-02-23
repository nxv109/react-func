import React from "react";
import { useTranslation } from "react-i18next";

export default function HeaderContentCheckout() {
  const { t } = useTranslation();
  const listHeaderContent = [
    "Image",
    "Name",
    "Price",
    "Color",
    "Size",
    "Amount",
    "Into money"
  ];

  return (
    <thead>
      <tr>
        {listHeaderContent.map((item, index) => (
          <th key={index}>{t(item)}</th>
        ))}
      </tr>
    </thead>
  );
}
