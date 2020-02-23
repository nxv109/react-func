import React from 'react';
import { useTranslation } from "react-i18next";

export default function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="main-footer">
      <div className="footer container">
        <div className="footer__sponsor"><img src="http://localhost:3000/images/sponsors.png" alt="" /></div>
        <div className="footer__f">
          <div className="footer__t">
            <div className="footer__ti">
              <div className="footer__title">{t("Information").toUpperCase()}</div>
              <ul>
                <li><a href="#0">{t("About us").toUpperCase()}</a></li>
                <li><a href="#0">{t("Delivery").toUpperCase()}</a></li>
                <li><a href="#0">{t("Feelings").toUpperCase()}</a></li>
                <li><a href="#0">{t("Storage").toUpperCase()}</a></li>
              </ul>
            </div>
            <div className="footer__ti">
              <div className="footer__title">{t("Purchase").toUpperCase()}</div>
              <ul>
                <li><a href="#0">{t("Transport").toUpperCase()} & {t("Return the product").toUpperCase()}</a></li>
                <li><a href="#0">{t("Buy safe products").toUpperCase()}</a></li>
                <li><a href="#0">{t("International Shipping").toUpperCase()}</a></li>
                <li><a href="#0">{t("Link").toUpperCase()}</a></li>
                <li><a href="#0">{t("Discount service").toUpperCase()}</a></li>
              </ul>
            </div>
            <div className="footer__ti">
              <div className="footer__title">{t("Send")} EMAIL</div>
              <p>{t("Email us for support")}</p>
              <div className="footer__send-mail">
                <input type="text" />
                <button className="footer__button-sm" type="button">{t("Send").toUpperCase()}</button>
              </div>
              <div className="footer__icons-sm"> <span><i className="fab fa-twitter" /></span><span><i className="fab fa-google-plus" /></span><span><i className="fab fa-linkedin" /></span><span><i className="fab fa-facebook" /></span></div>
            </div>
            <div className="footer__ti">
              <div className="footer__title">{t("Contact")}</div>
              <ul>
                <li>{t("Company Address")}</li>
                <li><span>(04) 6674 2332 - (04) 37868904</span></li>
                <li><span>(08) 6680 9686 Suport@bizweb.vn</span></li>
              </ul>
            </div>
          </div>
          <div className="footer__b">
            <div className="footer__copyright">Copyright 2008-2019 DKT Technology JSC</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
