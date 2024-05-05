import { useEffect, useState } from "react";

import "./index.css";

const Statistics = ({ month }) => {
  const [statisitcData, setStatisitcData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/getStatistics?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      console.log(data);
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
