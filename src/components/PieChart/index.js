import { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

import "./index.css";

const PieChartComponent = () => {
  const [month, changeMonth] = useState(3);
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backendassignment-co6p.onrender.com/pieChart?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setPieChartData(data);
    }
  };

  const OnChangeMonth = (e) => {
    changeMonth(e.target.value);
  };

  return (
    <div className="pie-chart-conainer">
      <h1 className="heading-pie-chart">Transactions Bar Chart</h1>
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
      <ResponsiveContainer width="80%" height={400}>
        <PieChart>
          <Pie
            cx="70%"
            cy="40%"
            data={pieChartData}
            startAngle={0}
            endAngle={360}
            innerRadius="0%"
            outerRadius="70%"
            dataKey="ItemsCount"
          >
            <Cell name="jewelery" fill="#fecba6" />
            <Cell name="men's clothing" fill="#b3d23f" />
            <Cell name="electronics" fill="#a44c9e" />
            <Cell name="women's clothing" fill="#42f5c5" />
          </Pie>
          <Legend
            iconType="circle"
            layout="vertical"
            verticalAlign="middle"
            align="right"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;
