import React from "react";

const MonthContext = React.createContext({
  month: 3,
  changeMonth: () => {},
});

export default MonthContext;
