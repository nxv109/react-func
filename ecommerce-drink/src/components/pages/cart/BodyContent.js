import React from "react";
import { useTranslation } from "react-i18next";

export default function BodyContent(props) {
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
          <td className="detail__pro-select">
            <span>{t("Choosed")}: </span>
            <select name="color" onChange={e => props.handleChangeColor(item.id, e)}>
              <option value={item.choosedColor || ""}>
                {t(item.choosedColor).toUpperCase() || "Chưa chọn color"}
              </option>
              {item.colors.map((color, index) => (
                <option key={index} value={color} style={{backgroundColor: color}}>
                  {t(color).toUpperCase()}
                </option>
              ))}
            </select>
          </td>
          <td className="detail__pro-select">
            <span>{t("Choosed")}: </span>
            <select name="size" onChange={e => props.handleChangeSize(item.id, e)}>
              <option value={item.choosedSize || ""}>
                {t(item.choosedSize).toUpperCase() || "Chưa chọn size"}
              </option>
              {item.sizes.map((size, index) => (
                <option key={index} value={size}>
                  {t(size).toUpperCase()}
                </option>
              ))}
            </select>
          </td>
          <td>
            <input
              type="number"
              value={item.amount}
              onChange={e => props.handleChangeAmount(item.id, e)}
              min="0"
              max="5"
            />
          </td>
          <td>{item.price * item.amount}$</td>
          <td>
            <i
              className="far fa-trash-alt"
              onClick={() => props.handleDelete(item.id)}
            />
          </td>
        </tr>
      ))}
    </tbody>
  );
}
