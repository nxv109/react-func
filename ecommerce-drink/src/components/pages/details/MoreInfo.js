import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import Rating from "./Rating";

export default function MoreInfo({ rate, proId }) {
  const { t } = useTranslation();
  const appState = useSelector(state => state);

  return (
    <div className="detail__more-info">
      <div className="tabs">
        <div className="tab">
          <input
            className="checkboxtab"
            id="checkbox1"
            name="checkbox-tabs-group"
            type="radio"
            defaultChecked
          />
          <label htmlFor="checkbox1">{t("Highlight").toUpperCase()}</label>
          <div className="content">asd</div>
        </div>
        <div className="tab">
          <input
            className="checkboxtab"
            id="checkbox2"
            name="checkbox-tabs-group"
            type="radio"
          />
          <label htmlFor="checkbox2">{t("Infomation").toUpperCase()}</label>
          <div className="content">
            Offers fine, minerally length. Sangiovese and Merlot. Best from 2021
            through 2032”A beam of pure blackberry.
          </div>
        </div>
        <div className="tab">
          <input
            className="checkboxtab"
            id="checkbox3"
            name="checkbox-tabs-group"
            type="radio"
          />
          <label htmlFor="checkbox3">{t("Evaluate").toUpperCase()}</label>
          <div className="content">
            <div style={{ margin: "2rem 0" }}>
              {appState.users.data ? (
                <>
                  <Rating
                    rate={rate}
                    userId={appState.users.data.id}
                    proId={proId}
                  />
                  <div className="fb-comments" data-href="http://localhost:3000/ruou-vang-da-lat-2/2" data-width data-numposts={5} />
                </>

              ) : (
                <span>
                  {t("Login to evaluate")} <Link to="/login">{t("Login")}</Link>
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
