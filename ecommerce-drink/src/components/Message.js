import React from "react";
import { useSelector } from "react-redux";
import { fetchProductOfCart } from "../mixins/fetchData";

export default function Message() {
  const appState = useSelector(state => state);
  const userExist = JSON.parse(sessionStorage.getItem("users"));
  const userId = userExist ? userExist.id : null;

  const createMsg = () => {
    if (appState.message.text === "Thêm vào giỏ hàng thành công") {
      const countProOfCart = fetchProductOfCart("cart", { userId: userId });

      const amount = countProOfCart.reduce((total, cur) => {
        return total += cur.amount;
      }, 0);

      return { __html: `${appState.message.text} <a class="signin__node-sm" href="/cart">Xem giỏ hàng (${amount})</a>` }
    } else if (appState.message.text === "Đăng nhập để thêm vào giỏ") {
      return { __html: `${appState.message.text} <a class="signin__node-sm" href="/login">Đăng nhập</a>` }
    }

    return { __html: appState.message.text };
  };

  return (
    <div
      dangerouslySetInnerHTML={createMsg()}
      className="message"
      style={{ padding: appState.message.text ? ".5rem 1rem" : "" }}
    />
  );
}
