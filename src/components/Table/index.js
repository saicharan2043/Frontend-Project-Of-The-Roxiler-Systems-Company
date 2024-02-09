import { useState, useEffect, useContext } from "react";
import { CgChevronLeft, CgChevronRight } from "react-icons/cg";
import RowOfTable from "../RowOfTable";
import "./index.css";
import MonthContext from "../Context";

const Table = () => {
  const { month } = useContext(MonthContext);
  const [serachValue, setSerachValue] = useState("");
  const [pageNo, setPageNo] = useState(1);
  const [limit, setLimit] = useState(2);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    getTableData();
  }, [month, pageNo, serachValue]);

  // get data

  const getTableData = async () => {
    console.log(pageNo);
    const response = await fetch(
      `https://backendassignment-co6p.onrender.com/getTableTransactions?search=${
        serachValue.length === 0 ? "0" : serachValue
      }&month=${month}&pageno=${pageNo}&limit=${limit}`
    );

    if (response.ok) {
      const data = await response.json();
      setTableData(data);
      console.log(data);
    }
  };

  // search value

  const changeSearchValue = (e) => {
    setSerachValue(e.target.value);
    setPageNo(1);
  };

  // left arrow

  const clickLeftArrow = () => {
    if (pageNo > 1) {
      setPageNo((prevPageNo) => prevPageNo - 1);
    }
  };

  // right arrow

  const clickRightArrow = () => {
    if (tableData.length === limit) {
      setPageNo((prevPageNo) => prevPageNo + 1);
    }
  };

  // active

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
          onChange={changeSearchValue}
          value={serachValue}
        />
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
          onClick={clickLeftArrow}
        />
        <p className="page-no">{pageNo}</p>
        <CgChevronRight
          className={`next-btn ${isNxtInActive}`}
          onClick={clickRightArrow}
        />
      </div>
    </div>
  );
};

export default Table;
