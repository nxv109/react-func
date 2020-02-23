import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { fetchData, updateData } from "../../../mixins/fetchData";
import { setMessage } from "../../../actions/message.action";
import { closeMessage } from "../../closeMessage";
import Breadcrumb from "../../Breadcrumb";

export default function Edit() {
  const [user, setUser] = useState(Object);
  const dispatch = useDispatch();
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

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;

    setUser({ ...user, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      const data = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        address: user.address
      };

      updateData("users", { id: userId }, data);
      dispatch(setMessage("Cập nhật thành công"));
      dispatch(closeMessage(""));
    } catch (e) {
      console.log(e);
    }
  };

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
    <section className="box-profile-edit">
      <div className="container">
        <Breadcrumb breadcrumbItem="Edit" />
        <div className="main-title-tl m-b-3">
          <h1 className="main-title-tl__tt detail__eff--left">
            {t("Edit").toUpperCase()}
          </h1>
          <div className="main-title-tl__eff detail__eff--left">
            <img src="./images/titleleft-dark.png" alt="" />
          </div>
        </div>
        <div className="box-profile">
          <form onSubmit={handleSubmit}>
            <table className="box-profile__table m-b-3">
              <tbody>
                <tr>
                  <td>
                    <b>{t("First name")}</b>
                    <input
                      onChange={handleChange}
                      name="firstName"
                      type="text"
                      value={user.firstName || ""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>{t("Last name")}</b>
                    <input
                      onChange={handleChange}
                      name="lastName"
                      type="text"
                      value={user.lastName || ""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Email</b>
                    <input
                      onChange={handleChange}
                      name="email"
                      type="text"
                      value={user.email || ""}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>{t("Address")}</b>
                    <input
                      onChange={handleChange}
                      name="address"
                      type="text"
                      value={user.address || ""}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="box-profile__node-update">
              <button className="signin__sm-sn m-r-1">
                {t("Update").toUpperCase()}
              </button>
              <div className="signin__node-sn box-profile__node-back">
                <Link to="/profile">{t("Back").toUpperCase()}</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
