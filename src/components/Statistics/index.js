import { useEffect, useState } from "react";

import "./index.css";

const Statistics = () => {
  const [month, changeMonth] = useState(3);
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

  const OnChangeMonth = (e) => {
    changeMonth(e.target.value);
  };

  return (
    <div className="statistic-conainer">
      <h1 className="heading-statistic-chart">Statistics</h1>
      <select
        className="month-options change-month-input-position"
        onChange={OnChangeMonth}
        value={month}
      >
        <option value={1}>Jan</option>
        <option value={2}>Feb</option>
        <option value={3}>Mar</option>
        <option value={4}>Apr</option>
        <option value={5}>May</option>
        <option value={6}>June</option>
        <option value={7}>July</option>
        <option value={8}>Aug</option>
        <option value={9}>Sept</option>
        <option value={10}>Oct</option>
        <option value={11}>Nov</option>
        <option value={12}>Dec</option>
      </select>
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
