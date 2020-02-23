import React from "react";
import { useTranslation } from "react-i18next";

export default function HeaderContentUsers() {
  const { t } = useTranslation();
  const listHeaderContent = ["Name"];

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
