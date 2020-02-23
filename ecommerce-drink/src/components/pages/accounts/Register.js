import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setMessage } from "../../../actions/message.action";
import { checkValidateRegisterForm } from "../../../mixins/checkValidateForm";
import { closeMessage } from "../../closeMessage";
import { fetchData } from '../../../mixins/fetchData';
import { addData } from "../../../mixins/fetchData";
import Breadcrumb from '../../Breadcrumb';

export default function Register() {
  const { t } = useTranslation();
  const [users, setUsers] = useState({});
  const [firstNameErr, setFirstNameErr] = useState(Boolean);
  const [lastNameErr, setLastNameErr] = useState(Boolean);
  const [emailErr, setEmailErr] = useState(Boolean);
  const [addressErr, setAddressErr] = useState(Boolean);
  const [passwordErr, setPasswordErr] = useState(Boolean);
  const [passwordAgainErr, setPasswordAgainErr] = useState(Boolean);
  const dispatch = useDispatch();
  const bd = "1px solid red"
  const checkUserLogin = JSON.parse(sessionStorage.getItem("users"));

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;

    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      // validate
      const userExist = checkUserExist(users.email);
      const msg = setMessage(
        checkValidateRegisterForm(
          users,
          setFirstNameErr,
          setLastNameErr,
          setEmailErr,
          setAddressErr,
          setPasswordErr,
          setPasswordAgainErr,
          userExist
        )
      );

      dispatch(msg);

      let isMessage = Boolean;

      if (msg.payload === "Mật khẩu không trùng khớp") {
        isMessage = false;
      } else if (msg.payload === "Người dùng đã tồn tại") {
        isMessage = false;
      }else if (msg.payload === "Đăng ký thành công") {
        isMessage = true;

        const usersData = {
          id: '_' + Math.random().toString(36).substr(2, 9),
          firstName: users.firstName,
          lastName: users.lastName,
          email: users.email,
          address: users.address,
          password: users.password,
          role: 0
        };

        // add user
        addData("users", usersData);
      } else {
        return;
      }

      dispatch(closeMessage(isMessage));
    } catch (e) {
      console.log(e);
    }

    function checkUserExist(email) {
      return fetchData("users", { email: email });
    };
  };

  return (
    <React.Fragment>
      {!checkUserLogin ? (<section className="main-signin">
      <div className="signin container">
        <Breadcrumb breadcrumbItem="Register" />
        <div className="signin__sn">
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Register").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="./images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="signin__node-sn">
            <Link to="/login">{t("Login").toUpperCase()}</Link>
          </div>
        </div>
        <div className="signin__box-su">
          <div className="signin__box-sn">
            <div className="signin__title">
              {t("Personal information").toUpperCase()}
            </div>
            <div className="signin__ip-sn">
              <form onSubmit={handleSubmit}>
                <div style={{ border: firstNameErr ? bd : "" }}>
                  <input
                    type="text"
                    name="firstName"
                    value={users.firstName || ""}
                    onChange={handleChange}
                    placeholder={t("First name")}
                  />
                </div>
                <div style={{ border: lastNameErr ? bd : "" }}>
                  <input
                    type="text"
                    name="lastName"
                    value={users.lastName || ""}
                    onChange={handleChange}
                    placeholder={t("Last name")}
                  />
                </div>
                <div style={{ border: emailErr ? bd : "" }}>
                  <input
                    type="text"
                    name="email"
                    value={users.email || ""}
                    onChange={handleChange}
                    placeholder="Email"
                  />
                </div>
                <div style={{ border: addressErr ? bd : "" }}>
                  <input
                    type="text"
                    name="address"
                    value={users.address || ""}
                    onChange={handleChange}
                    placeholder={t("Address")}
                  />
                </div>
                <div style={{ border: passwordErr ? bd : "" }}>
                  <input
                    type="password"
                    name="password"
                    value={users.password || ""}
                    onChange={handleChange}
                    placeholder={t("Password")}
                  />
                </div>
                <div style={{ border: passwordAgainErr ? bd : "" }}>
                  <input
                    type="password"
                    name="passwordAgain"
                    value={users.passwordAgain || ""}
                    onChange={handleChange}
                    placeholder={t("Password again")}
                  />
                </div>
                <button className="signin__sm-sn">
                  {t("Register").toUpperCase()}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>) : <Redirect to="/" />}
    </React.Fragment>
  );
}
