import { Component } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import RowOfTable from "../RowOfTable";
import "./index.css";

class Table extends Component {
  state = {
    serachValue: "",
    month: 3,
    pageNo: 1,
    limit: 2,
    tableData: [],
  };

  componentDidMount() {
    this.getTableData();
  }

  getTableData = async () => {
    const { serachValue, month, pageNo, limit } = this.state;
    const response = await fetch(
      `https://backendassignment-co6p.onrender.com/getTableTransactions?search=${
        serachValue.length === 0 ? "0" : serachValue
      }&month=${month}&pageno=${pageNo}&limit=${limit}`
    );
    if (response.ok) {
      const data = await response.json();
      this.setState({ tableData: data });
    }
  };

  changeSearchValue = (e) => {
    this.setState(
      { serachValue: e.target.value, pageNo: 1 },
      this.getTableData
    );
  };

  changeMonthsInTable = (e) => {
    this.setState({ month: e.target.value, pageNo: 1 }, this.getTableData);
  };

  clickLeftArrow = () => {
    const { pageNo } = this.state;
    if (pageNo > 1) {
      this.setState(
        (eachValue) => ({ pageNo: eachValue.pageNo - 1 }),
        this.getTableData
      );
    }
  };

  clickRightArrow = () => {
    const { tableData, limit } = this.state;
    if (tableData.length === limit) {
      this.setState(
        (eachValue) => ({ pageNo: eachValue.pageNo + 1 }),
        this.getTableData
      );
    }
  };

  render() {
    const { serachValue, month, pageNo, tableData, limit } = this.state;
    let isNxtInActive = "";
    if (tableData.length === 0 || tableData.length < limit) {
      isNxtInActive = "in-active";
    }
    return (
      <div className="table-component-container">
        <h1 className="heading-table">All Transctions Table</h1>
        <div className="container-of-search-month">
          <input
            type="search"
            placeholder="search"
            className="search-input"
            onChange={this.changeSearchValue}
            value={serachValue}
          />
          <select
            className="month-options"
            onChange={this.changeMonthsInTable}
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
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>PRICE</th>
              <th>DESCRIPTION</th>
              <th>CATEGOTY</th>
              <th>IMAGE</th>
              <th>SOLD</th>
              <th>DATEOFSALE</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((eachValue) => (
              <RowOfTable key={eachValue.id} eachRow={eachValue} />
            ))}
          </tbody>
        </table>
        <div className="pagination-container">
          <CgChevronLeft
            className={`previous-btn ${pageNo === 1 && "in-active"}`}
            onClick={this.clickLeftArrow}
          />
          <p className="page-no" data-aos="zoom-in">
            {pageNo}
          </p>
          <CgChevronRight
            className={`next-btn ${isNxtInActive}`}
            onClick={this.clickRightArrow}
          />
        </div>
      </div>
    );
  }
}

export default Table;
