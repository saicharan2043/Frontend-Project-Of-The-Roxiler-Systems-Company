import { useEffect, useState, useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  ResponsiveContainer,
} from "recharts";

import MonthContext from "../Context";

import "./index.css";

const BarChartComponent = () => {
  const { month } = useContext(MonthContext);
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

  return (
    <div className="bar-chart-conainer">
      <h1 className="heading-bar-chart">Transactions Bar Chart</h1>
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
