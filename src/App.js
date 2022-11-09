import logo from './logo.svg';
import './App.css';
import Chart from "react-apexcharts";
import { BarChart } from './components/BarChart';
import { MixChart } from './components/MixChart';
import { Alert, Container, Col, Row } from 'reactstrap';

function App() {
  return (
    //     <div className="App">
    //       <Alert color="primary">
    //   Hey! Pay attention.
    // </Alert>
    //           <BarChart/>
    //           <MixChart/>
    //     </div>
    <Container
      className="bg-light border"
      fluid="md"
    >
      <Row md="12">
        <Col md="12" className='bg-light'>
          <h1 class="display-4 text-center">Data Visualization with React and ApexChart</h1>
        </Col>
      </Row>
      <Row md="12">
        <Col className="bg-light border" md="6">
          <div className='overflow-auto'>
            <BarChart />
          </div>
        </Col>
        <Col className="bg-light border" md="6">
          <div className='overflow-auto'>
            <MixChart />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
