import { Component } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import RowOfTable from "../RowOfTable";
import "./index.css";

class Table extends Component {
  state = {
    pageNo: 1,
    limit: 5,
    tableData: [],
  };

  componentDidMount() {
    this.getTableData();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.searchValue !== prevProps.searchValue ||
      this.props.month !== prevProps.month
    ) {
      this.getTableData();
    }
  }

  getTableData = async () => {
    const { pageNo, limit } = this.state;
    const { searchValue, month } = this.props;
    const response = await fetch(
      `https://backend-assignment-of-roxiler-systems.onrender.com/getTableTransactions?search=${searchValue}&month=${month}&pageno=${pageNo}&limit=${limit}`
    );

    if (response.ok) {
      const data = await response.json();
      this.setState({ tableData: data });
    }
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
    const { pageNo, tableData, limit } = this.state;
    let isNxtInActive = "";
    if (tableData.length === 0 || tableData.length < limit) {
      isNxtInActive = "in-active";
    }
    return (
      <div className="table-component-container">
        <h1 className="heading-in-table">Table</h1>
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
