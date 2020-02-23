import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../../actions/order.action";
import { useTranslation } from "react-i18next";
import Breadcrumb from "../../Breadcrumb";
import { fetchProductOfCart, removeData } from "../../../mixins/fetchData";
import HeaderContentOrders from "./HeaderContentOrders";
import BodyContentOrders from "./BodyContentOrders";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";

export default function Orders({ history }, props) {
  const { t } = useTranslation();
  const appState = useSelector(state => state);
  const dispatch = useDispatch();
  const checkUserLogin = JSON.parse(sessionStorage.getItem("users"));
  const userId = checkUserLogin ? checkUserLogin.id : null;

  useEffect(() => {
    if (userId) {
      const fetchCart = async () => {
        const res = await fetchProductOfCart("orders", { userId: userId });

        dispatch(getOrder(res));
      };

      fetchCart();
    }
  }, [dispatch, userId]);

  const handleDeleteOrders = () => {
    removeData("orders", { userId: userId });
    dispatch(getOrder([]));
    dispatch(setMessage("Xóa đơn hàng đã mua thành công"));
    dispatch(closeMessage(""))
  };

  if (appState.order.data.length === 0) {
    return (
      <section
        style={{ textAlign: "center", padding: "5rem", color: "gray" }}
        className="main-cart"
      >
        {!checkUserLogin ? t("Please login to view orders details") : t("Empty orders")}
      </section>
    );
  }

  return (
    <React.Fragment>
      <section className="main-cart">
        <div className="cart container">
          {" "}
          <Breadcrumb breadcrumbItem="Orders" />
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Orders").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="/images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <table>
              <HeaderContentOrders />
              <BodyContentOrders listOrders={appState.order.data} />
            </table>
          </div>
          <div className="cart__actions">
            <button onClick={handleDeleteOrders} className="signin__node-sm" style={{ marginRight: "1rem" }}>
              {t("Delete orders")}
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
