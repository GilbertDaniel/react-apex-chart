import logo from './logo.svg';
import './App.css';
import Chart from "react-apexcharts";
import { BarChart } from './components/BarChart';
import { MixChart } from './components/MixChart';

function App() {
  return (
    <div className="App">
          <BarChart/>
          <MixChart/>
    </div>
  );
}

export default App;
