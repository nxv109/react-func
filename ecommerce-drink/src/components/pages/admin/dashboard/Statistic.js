import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import moment from "moment";
import { fetchAllData } from "../../../../mixins/fetchData";
import { useTranslation } from "react-i18next";

export default function Statistic({ month, startDate }) {
  const [ orders, setOrders ] = useState(Array);
  const labels = ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  let dataStatistic = ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"];
  const formatStartDate = moment(startDate).format("YYYY-MM");
  const { t } = useTranslation();

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetchAllData("orders");

      setOrders(res);
    };

    fetchOrders();
  }, [formatStartDate])

  const countProDate = () => {
    if (orders.length > 0) {

      const listOrdersMonth = orders.filter(v => {
        const dateOrder = moment(v.createDate).format("YYYY-MM");

        return dateOrder === formatStartDate;
      });

      const countBuy = listOrdersMonth.reduce((prev, next) => {
        prev[next.createDate] = prev[next.createDate] + 1 > 1 ? prev[next.createDate] + next.amount : next.amount;

        return prev;
      }, {});

      buyByDate(countBuy);
    }
  };

  function buyByDate(countBuy) {
    const listBuyByDate = [];

    for (let key in countBuy) {
      listBuyByDate.push({ date: key, amount: countBuy[key] });
    }

    setToStatistic(listBuyByDate);
  }

  function setToStatistic(list) {
    for (let v of list) {
      const date = moment(v.date).format("DD");

      if (labels.includes(date)) {
        dataStatistic.splice(labels.indexOf(date), 0, v.amount);
      }
    }
  }

  countProDate();

  const data = {
		labels: labels,
		datasets: [
			{
				label: t("Amount"),
				data: dataStatistic,
				backgroundColor: 'rgba(255, 99, 132, 0.6)'
			}
		]
	};

  return (
    <React.Fragment>
      <Bar
				data={data}
        height={200}
        options={{
          responsive: true,
          maintainAspectRatio: false
        }}
			/>
    </React.Fragment>
  );
}
