import AOS from "aos";
import "aos/dist/aos.css";
import Table from "./components/Table";
import BarChartComponent from "./components/BarChartComponent";
import PieChartComponent from "./components/PieChart";
import Statistics from "./components/Statistics";
import "./App.css";

AOS.init({
  duration: 1000,
  offset: 300,
});

function App() {
  return (
    <div className="App">
      <Table />
      <BarChartComponent />
      <PieChartComponent />
      <Statistics />
    </div>
  );
}

export default App;
