import React from "react";

export default function BodyContentUsers({ categories }) {
  return (
    <tbody>
      {categories.map((item, index) => (
        <tr key={index}>
          <td>{item}</td>
        </tr>
      ))}
    </tbody>
  );
}
