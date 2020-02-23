import React, { useState } from "react";
import Statistic from "./Statistic";
import DatePicker from "react-datepicker";
import moment from "moment";
import "react-datepicker/dist/react-datepicker.css";
import { useTranslation } from "react-i18next";

export default function Dashboard() {
  const [ month, setMonth ] = useState(String);
  const [ startDate, setStartDate ] = useState(new Date());
  const { t } = useTranslation();

  const handleChangeMonth = (date) => {
    const month = moment(date).utc().format("YYYY-MM-DD");

    setMonth(month);
    setStartDate(date);
  };

  return (
    <React.Fragment>
      <section className="main-cart m-t-3">
        <div className="cart container">
          <div className="main-title-tl">
            <h1 className="main-title-tl__tt detail__eff--left">
              {t("Dashboard").toUpperCase()}
            </h1>
            <div className="main-title-tl__eff detail__eff--left">
              <img src="/images/titleleft-dark.png" alt="" />
            </div>
          </div>
          <div className="cart__b-cart">
            <h4 className="m-b-3 f-weight-lighter">Thống kê lượt mua:</h4>
            <DatePicker
              selected={startDate}
              onChange={date => handleChangeMonth(date)}
              dateFormat="yyyy/MM"
              showMonthYearPicker
              className="border border-white rounded-pill ml-1 p-1"
              style={{ borderRadius: "10px" }}
            />
            <Statistic month={month} startDate={startDate} />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
