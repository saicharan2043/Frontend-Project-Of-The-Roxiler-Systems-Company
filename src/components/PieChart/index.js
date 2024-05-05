import { useEffect, useState } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts";

import "./index.css";

const PieChartComponent = ({ month }) => {
  const [pieChartData, setPieChartData] = useState([]);

  useEffect(() => {
    getPieData();
  }, [month]);

  const getPieData = async () => {
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/pieChart?month=${month}`
    );
    if (response.ok) {
      const data = await response.json();
      setPieChartData(data);
    }
  };

  return (
    <div className="pie-chart-conainer">
      <h1 className="heading-pie-chart">Pie Chart</h1>

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
