import { useEffect, useState, useContext } from "react";

import MonthContext from "../Context";

import "./index.css";

const Statistics = (props) => {
  const { month } = useContext(MonthContext);
  const [statisitcData, setStatisitcData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backendassignment-co6p.onrender.com/getStatistics?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setStatisitcData(data);
    }
  };

  return (
    <div className="statistic-conainer">
      <h1 className="heading-statistic-chart">Statistics</h1>
      <div className="statistic-sub-container">
        <div className="cantegory-container">
          <p className="category-text">Tota sale</p>
          <p className="category-text">{statisitcData.sumOfReslut}</p>
        </div>
        <div className="cantegory-container">
          <p className="category-text">Tota sold item</p>
          <p className="category-text">{statisitcData.numberSoldOfReslut}</p>
        </div>
        <div className="cantegory-container">
          <p className="category-text">Tota not sold item</p>
          <p className="category-text">{statisitcData.numberUnsoldOfReslut}</p>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
