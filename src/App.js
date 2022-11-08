import logo from './logo.svg';
import './App.css';
import Chart from "react-apexcharts";

function App() {
  var series = [
    {
      name: 'Company1',
      data:[100,200,250,300,350,450,500],
      color:"#684756"
    },
    {
      name: 'Company2',
      data:[110,220,270,320,370,460,480],
      color:"#3D314A"
    },
    {
      name: 'Company3',
      data:[120,230,260,350,380,420,460],
      color:"#1A1423"
    },
    {
      name: 'Company4',
      data:[150,250,280,350,390,410,490],
      color:"#AB8476"
    }
  ]
  var options = {
    theme:{
      mode:'light'
    },
    chart:{
      stacked:true
    },
    tooltip:{
      followCursor:true
    },
    dataLabels:{
      formatter:(val)=>{
        return `$${val}`
      },
      style:{
        colors:['#FFFFFF'],
        fontSize:12
      }
    },
    xaxis:{
      tickPlacement:'on',
      categories:['Jan','Feb','Mar','Apr','May','Jun'],
      title:{
        text:'Months',
        style:{
          fontSize:16,
          colors:['#000']
        }
      }
    },
    yaxis:{
      labels:{
        formatter:(val)=>{
          return `$${val}`
        },
        style:{
          colors:['#000'],
          fontSize:14
        }
      },
      title:{
        text:'Amounts',
        style:{
          fontSize:16,
          color:'#000'
        }
      }
    },
    legend:{
      show:true,
      position:'right'
    },
    title:{
      text:'Bar Chart',
      style:{
        fontSize:30
      }
    },
    subtitle:{
      text:'This chart shows revenue data of components by month',
      style:{
        fontSize:16,
      }
    }
}
  return (
    <div className="App">
          <Chart 
            type="bar"
            width={600}
            height={600}
            series={series}
            options={options}
          >

          </Chart>
    </div>
  );
}

export default App;
