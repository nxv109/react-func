import React from "react";
import { useTranslation } from "react-i18next";

export default function BodyContentUsers({ users }) {
  const { t } = useTranslation();

  return (
    <tbody>
      {users.map(item => (
        <tr key={item.id}>
          <td>{item.lastName}</td>
          <td>{item.email}</td>
          <td>{item.address || t("Unknown")}</td>
        </tr>
      ))}
    </tbody>
  );
}
