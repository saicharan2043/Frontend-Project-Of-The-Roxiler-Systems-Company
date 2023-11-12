import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import "./index.css";

const BarChartComponent = () => {
  const [month, changeMonth] = useState(3);
  const [barChartData, setBarChart] = useState([]);

  useEffect(() => {
    getBarData();
  }, [month]);

  const getBarData = async () => {
    const response = await fetch(
      `https://backendassignment-co6p.onrender.com/barChart?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setBarChart(data);
    }
  };

  const OnChangeMonth = (e) => {
    changeMonth(e.target.value);
  };

  return (
    <div className="bar-chart-conainer">
      <h1 className="heading-bar-chart">Transactions Bar Chart</h1>
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
      <ResponsiveContainer width="80%" height={400} data-aos="zoom-in">
        <BarChart data={barChartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Bar dataKey="countOf" fill="#1f77b4" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;
