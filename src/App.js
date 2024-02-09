import { useState } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import Table from "./components/Table";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChart";
import Statistics from "./components/Statistics";
import MonthContext from "./components/Context";
import "./App.css";

AOS.init({
  duration: 1000,
  offset: 300,
});

function App() {
  const [month, setMonth] = useState(3);

  const changeMonthsInTable = (e) => {
    setMonth(e.target.value);
  };

  return (
    <MonthContext.Provider value={{ month, changeMonth: changeMonthsInTable }}>
      <div className="App">
        <select
          className="month-options"
          onChange={changeMonthsInTable}
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

        <Table />
        <BarChartComponent />
        <PieChartComponent />
        <Statistics />
      </div>
    </MonthContext.Provider>
  );
}

export default App;
