import React, { useState, useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { setMessage } from "../../../actions/message.action";
import { setUserLogin } from "../../../actions/user.action";
import { fetchData } from '../../../mixins/fetchData';
import { closeMessage } from "../../closeMessage";
import { checkValidateLoginForm } from "../../../mixins/checkValidateForm";
import Breadcrumb from '../../Breadcrumb';

export default function Login({ history }) {
  const { t } = useTranslation();
  const [users, setUsers] = useState(Object);
  const [userData, setUserData] = useState(Object);
  const [emailErr, setEmailErr] = useState(Boolean);
  const [passwordErr, setPasswordErr] = useState(Boolean);
  const dispatch = useDispatch();
  const bd = "1px solid red";
  const checkUserLogin = JSON.parse(sessionStorage.getItem("users"));

  useEffect(() => {
    setUserData(fetchData('users'));

    return () => false;
  }, []);

  const handleChange = e => {
    const target = e.target;
    const { name, value } = target;

    setUsers({ ...users, [name]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();

    try {
      // validate
      setMessage(checkValidateLoginForm(users, setEmailErr, setPasswordErr));

      const userExist = userData.find(v => v.email === users.email);

      if (users.email && users.password) {
        if (!userExist) {
          dispatch(setMessage("Người dùng không tồn tại"));
        } else if (
          users.email === userExist.email &&
          users.password === userExist.password
        ) {
          dispatch(setMessage("Đăng nhập thành công"));

          const { id, email } = userExist;
          sessionStorage.setItem("users", JSON.stringify({ id, email }));
          dispatch(setUserLogin(userExist));
          history.push("/");
        } else {
          dispatch(setMessage("Sai email/password"));
        }
      } else {
        return;
      }

      dispatch(closeMessage(""));
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <React.Fragment>
        {!checkUserLogin ? (<section className="main-signin">
        <div className="signin container">
          <Breadcrumb breadcrumbItem="Login" />
          <div className="signin__sn">
            <div className="main-title-tl">
              <h1 className="main-title-tl__tt detail__eff--left">{t("Login").toUpperCase()}</h1>
              <div className="main-title-tl__eff detail__eff--left">
                <img src="./images/titleleft-dark.png" alt="" />
              </div>
            </div>
            <div className="signin__node-sn">
              <Link to="/register">{t("Register").toUpperCase()}</Link>
            </div>
          </div>
          <div className="signin__box-sn">
            <div className="signin__title">{t("Customer login").toUpperCase()}</div>
            <div className="signin__ip-sn">
              <form onSubmit={handleSubmit}>
                <div style={{ border: emailErr ? bd : "" }}>
                  <input
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={users.email || ""}
                    onChange={handleChange}
                  />
                </div>
                <div style={{ border: passwordErr ? bd : "" }}>
                  <input
                    type="password"
                    name="password"
                    placeholder={t("Password")}
                    value={users.password || ""}
                    onChange={handleChange}
                  />
                </div>
                <button className="signin__sm-sn">{t("Login").toUpperCase()}</button>
              </form>
            </div>
          </div>
        </div>
      </section>) : <Redirect to="/" />}
    </React.Fragment>
  );
}
