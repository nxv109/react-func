import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../actions/cart.action";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../Breadcrumb";
import {
  fetchProductOfCart,
  removeData,
  updateData
} from "../../../mixins/fetchData";
import HeaderContent from "./HeaderContent";
import BodyContent from "./BodyContent";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";

function updateCart(currCart, id, data) {
  currCart.forEach(v => {
    if (v.id === id) {
      updateData("cart", { id: id }, data);
    }
  });

  return currCart;
}

function totalMoney(cartData) {
  const total = cartData.reduce((total, cur) => {
    return (total += cur.price * cur.amount);
  }, 0);

  return total;
}

export default function Cart({ history }, props) {
  const [total, setTotal] = useState(Number);
  const { t } = useTranslation();
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const checkUserLogin = JSON.parse(sessionStorage.getItem("users"));
  const userId = checkUserLogin ? checkUserLogin.id : null;

  useEffect(() => {
    if (userId) {
      const fetchCart = async () => {
        const res = await fetchProductOfCart("cart", { userId: userId });

        dispatch(getCart(res));
        setTotal(totalMoney(res));
      };

      fetchCart();
    }
  }, [dispatch, userId]);

  if (appState.cart.data.length === 0) {
    return (
      <section
        style={{ textAlign: "center", padding: "5rem", color: "gray" }}
        className="main-cart"
      >
        {!checkUserLogin
          ? t("Please login to view cart details")
          : t("Empty cart")}
      </section>
    );
  }

  const handleChangeAmount = (id, e) => {
    const cart = [...appState.cart.data];
    let amount = e.target.value;

    dispatch(getCart(updateCart(cart, id, { amount: amount })));
    setTotal(totalMoney(appState.cart.data));
    dispatch(setMessage("Thay đổi số lượng thành công"));
    dispatch(closeMessage(""));
  };

  const handleChangeColor = (id, e) => {
    const cart = [...appState.cart.data];
    let color = e.target.value;

    dispatch(getCart(updateCart(cart, id, { choosedColor: color })));
    dispatch(setMessage("Thay đổi màu sắc thành công"));
    dispatch(closeMessage(""));
  };

  const handleChangeSize = (id, e) => {
    const cart = [...appState.cart.data];
    let size = e.target.value;

    dispatch(getCart(updateCart(cart, id, { choosedSize: size })));
    dispatch(setMessage("Thay đổi kích cỡ thành công"));
    dispatch(closeMessage(""));
  };

  const handleDelete = id => {
    (() => {
      const cart = [...appState.cart.data];
      const indexOfPro = cart.findIndex(v => v.id === id);
      const isConfirm = window.confirm(
        t("Are you sure you want to delete the item?")
      );

      if (isConfirm) return removeItem(cart, indexOfPro);
    })();

    function removeItem(cart, indexOfPro) {
      cart.splice(indexOfPro, 1);
      removeData("cart", { id: id });
      dispatch(getCart(cart));
      dispatch(setMessage("Loại bỏ sản phẩm khỏi giỏ thành công"));
      dispatch(closeMessage(""));
    }
  };

  const handleRedirectToHome = () => {
    history.push("/");
  };

  const handleRemoveCart = () => {
    const confirmRemoveCart = window.confirm(
      t("Do you want to delete all the shopping carts?")
    );

    if (confirmRemoveCart) {
      dispatch(getCart([]));
      removeData("cart", { userId: userId });
    }
  };

  return (
    <React.Fragment>
      <section className="main-cart">
        <div className="cart container">
          {" "}
          <Breadcrumb breadcrumbItem="Cart" />
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Cart").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="./images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <table>
              <HeaderContent />
              <BodyContent
                handleChangeAmount={handleChangeAmount}
                handleChangeSize={handleChangeSize}
                handleChangeColor={handleChangeColor}
                handleDelete={handleDelete}
                listCart={appState.cart.data}
              />
            </table>
          </div>
          <div className="cart__actions">
            <div style={{ marginBottom: "2rem", fontSize: "2rem" }}>
              {t("Total")}: {total}$
            </div>
            <Link
              to={`/checkout`}
              className="signin__node-sm"
              style={{ marginRight: "1rem" }}
            >
              {t("Checkout")}
            </Link>
            <button
              onClick={handleRedirectToHome}
              className="signin__node-sm"
              style={{ marginRight: "1rem" }}
            >
              {t("Continue to buy")}
            </button>
            <button onClick={handleRemoveCart} className="signin__node-sm">
              {t("Delete cart")}
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
