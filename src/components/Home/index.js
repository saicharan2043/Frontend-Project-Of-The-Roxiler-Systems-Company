import { useState } from "react";
import Table from "../Table";
import BarChartComponent from "../BarChartComponent";
import PieChartComponent from "../PieChart";
import Statistics from "../Statistics";
import "./index.css";

const Home = () => {
  const [searchValue, setSearchValue] = useState("");
  const [month, setMonth] = useState("03");

  const changeSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const changeMonthsInTable = (e) => {
    setMonth(e.target.value);
    setSearchValue("");
  };

  return (
    <div className="App">
      <h1 className="heading-table">All Transctions Details</h1>
      <div className="container-of-search-month">
        <input
          type="search"
          placeholder="search"
          className="search-input"
          onChange={changeSearchValue}
          value={searchValue}
        />
        <select
          className="month-options"
          onChange={changeMonthsInTable}
          value={month}
        >
          <option value={"01"}>Jan</option>
          <option value={"02"}>Feb</option>
          <option value={"03"}>Mar</option>
          <option value={"04"}>Apr</option>
          <option value={"05"}>May</option>
          <option value={"06"}>June</option>
          <option value={"07"}>July</option>
          <option value={"08"}>Aug</option>
          <option value={"09"}>Sept</option>
          <option value={"10"}>Oct</option>
          <option value={"11"}>Nov</option>
          <option value={"12"}>Dec</option>
        </select>
      </div>
      <Table month={month} searchValue={searchValue} />
      <BarChartComponent month={month} />
      <PieChartComponent month={month} />
      <Statistics month={month} />
    </div>
  );
};
export default Home;
