import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchData } from "../../../../mixins/fetchData";
import { useTranslation } from "react-i18next";
import HeaderContentCategories from "./HeaderContentCategories";
import BodyContentCategories from "./BodyContentCategories";

export default function Users() {
  const [ cateData, setCateData ] = useState(Array);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchDT = async () => {
      const res = await fetchData("categories");

      setCateData(res["Foreign wine"]);
    };

    fetchDT();
  }, []);

  return (
    <React.Fragment>
      <section className="main-cart m-t-3">
        <div className="cart container">
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Categories management").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="/images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <table>
              <HeaderContentCategories />
              <BodyContentCategories categories={cateData} />
            </table>
          </div>
          <div className="cart__actions">
            <Link to={`/admin`} className="signin__node-sm">
              {t("Dashboard")}
            </Link>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
