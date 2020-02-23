import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchAllData } from "../../../../mixins/fetchData";
import { useTranslation } from "react-i18next";
import HeaderContentUsers from "./HeaderContentUsers";
import BodyContentUsers from "./BodyContentUsers";

export default function Users() {
  const [userData, setUserData] = useState(Array);
  const { t } = useTranslation();

  useEffect(() => {
    const fetchDT = async () => {
      const res = await fetchAllData("users", { role: 0 });

      setUserData(res);
    };

    fetchDT();
  }, []);

  return (
    <React.Fragment>
      <section className="main-cart m-t-3">
        <div className="cart container">
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Users management").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="/images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <table>
              <HeaderContentUsers />
              <BodyContentUsers users={userData} />
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
