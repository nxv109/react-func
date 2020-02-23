import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchData } from "../../../mixins/fetchData";
import Breadcrumb from "../../Breadcrumb";

export default function Profile() {
  const [user, setUser] = useState(Object);
  const { t } = useTranslation();
  const userExist = JSON.parse(sessionStorage.getItem("users"));
  const userId = userExist ? userExist.id : null;

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetchData("users", { id: userId });

      setUser(res);
    };

    fetchUser();
  }, [userId]);

  if (!userId)
    return (
      <section
        style={{ textAlign: "center", padding: "5rem", color: "gray" }}
        className="main-cart"
      >
        {t("Sign in to see more")}
      </section>
    );

  return (
    <section className="main-profile">
      <div className="container">
        <Breadcrumb breadcrumbItem="Profile" />
        <div className="main-title-tl m-b-3">
          <h1 className="main-title-tl__tt detail__eff--left">
            {t("Profile").toUpperCase()}
          </h1>
          <div className="main-title-tl__eff detail__eff--left">
            <img src="./images/titleleft-dark.png" alt="" />
          </div>
        </div>
        <div className="box-profile">
          <table className="box-profile__table">
            <tbody>
              <tr>
                <td>
                  <b>{t("Name")}:</b> {user.lastName + " " + user.firstName}
                </td>
              </tr>
              <tr>
                <td>
                  <b>{t("Email")}:</b> {user.email}
                </td>
              </tr>
              <tr>
                <td>
                  <b>{t("Address")}:</b> {user.address}
                </td>
              </tr>
            </tbody>
          </table>
          <div className="signin__node-sn box-profile__node-edit m-t-3">
            <Link to="/edit">{t("Edit").toUpperCase()}</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
