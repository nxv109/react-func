import React, { useEffect, useState } from "react";
import StatusFlow from "./StatusFlow";
import { Link } from "react-router-dom";
import { fetchData } from "../../../mixins/fetchData";
import HeaderContentOrdersDetails from "./HeaderContentOrdersDetails";
import BodyContentOrdersDetails from "./BodyContentOrdersDetails";
import Breadcrumb from "../../Breadcrumb";
import { useTranslation } from "react-i18next";

const rootUrl = "http://localhost:3000";

export default function OrdersDetails({ match }) {
  const [product, setProduct] = useState(Object);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchOrdersPro = async () => {
      const id = match.params.id;
      const res = await fetchData("orders", { id: id });

      setProduct(res);
    };

    fetchOrdersPro();
  }, [match.params.id]);

  if (!product) {
    return null;
  }

  return (
    <>
      <section className="main-cart">
        <div className="cart container">
          {" "}
          <Breadcrumb breadcrumbItem="Orders details" />
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Orders details").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src={`${rootUrl}/images/titleleft-dark.png`} alt="" />
            </div>
          </div>
          <div
            className="orders-details container"
            style={{ marginTop: "5rem", marginBottom: "5rem" }}
          >
            <div className="box-status-flow">
              <StatusFlow
                status={product.status}
                createDate={product.createDate}
              />
            </div>
          </div>
          <hr />
          <div className="cart__b-cart">
            <table>
              <HeaderContentOrdersDetails />
              <BodyContentOrdersDetails listOrdersDetails={product} />
            </table>
          </div>
          <div className="cart__actions">
            <Link
              to="/purchase"
              className="signin__node-sm"
              style={{ marginRight: "1rem" }}
            >
              {t("Back")}
            </Link>
            <Link to={`/`} className="signin__node-sm">
              {t("Back to home page")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
