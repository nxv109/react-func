import React, { useEffect, useState, useMemo } from "react";
import { Link, Redirect } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../../actions/cart.action";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../Breadcrumb";
import { fetchProductOfCart, addData, fetchData, removeData } from "../../../mixins/fetchData";
import HeaderContentCheckout from "./HeaderContentCheckout";
import BodyContentCheckout from "./BodyContentCheckout";
import OrderStatus from "./OrderStatus";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";

const timeNow = moment().format();

function totalMoney(cartData) {
  const total = cartData.reduce((total, cur) => {
    return (total += cur.price * cur.amount);
  }, 0);

  return total;
}

export default function Checkout({ history }, props) {
  const [ address, setAddress ] = useState(String);
  const [ total, setTotal ] = useState(Number);
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

      const fetchAddress = async () => {
        const res = await fetchData("users", { id: userId });
        setAddress(res.address);
      };

      fetchAddress();
      fetchCart();
    }
  }, [dispatch, userId]);

  const list = useMemo(() => {
    return appState.cart.data;
  }, [appState.cart.data]);

  if (appState.cart.data.length === 0) {
    return (
      <>
        <Redirect to="/" />
      </>
    );
  }

  const handleOrder = () => {
    try {
      for (let item of appState.cart.data) {
        const orderData = {
          id:
            "_" +
            Math.random()
              .toString(36)
              .substr(2, 9),
          title: item.title,
          image: item.image,
          price: item.price,
          choosedColor: item.choosedColor,
          choosedSize: item.choosedSize,
          amount: +item.amount,
          status: 1,
          address: address,
          userId: item.userId,
          createDate: moment(timeNow).format("YYYY-MM-DD")
        };

        addData("orders", orderData);
        removeData("cart", { userId: userId });
      }

      history.push("/purchase");
      dispatch(setMessage("Đặt hàng thành công"));
      dispatch(closeMessage(""));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
      <section className="main-cart">
        <div className="cart container">
          {" "}
          <Breadcrumb breadcrumbItem="Checkout" />
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Checkout").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="./images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <table>
              <HeaderContentCheckout />
              <BodyContentCheckout listCart={list} />
            </table>
          </div>
          <div className="cart__actions">
            <OrderStatus total={total} address={address} />
            <button onClick={handleOrder} className="signin__node-sm" style={{ marginRight: "1rem" }}>
              {t("Order")}
            </button>
            <Link
              to={`/`}
              className="signin__node-sm"
            >
              {t("Back to home page")}
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
