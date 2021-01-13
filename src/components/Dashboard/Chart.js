import React, { useEffect, Component, useState } from "react";
import withStyles from '@material-ui/core/styles/withStyles'
import { Link, withRouter } from 'react-router-dom'
import firebase from '../firebase'
import moment from 'moment';
import {
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Line,
  ComposedChart,
  Area,
  AreaChart,
  Bar
} from "recharts";


const styles = theme => ({

});
// const data = [
//   // {
//   //   name: "Page A",
//   //   uv: 4000,
//   //   pv: 2400,
//   //   // amt: 2400
//   // },
//   // {
//   //   name: "Page B",
//   //   uv: 3000,
//   //   pv: 1398,
//   //   // amt: 2210
//   // },
//   // {
//   //   name: "Page C",
//   //   uv: 2000,
//   //   pv: 9800,
//   //   // amt: 2290
//   // },
//   // {
//   //   name: "Page D",
//   //   uv: 2780,
//   //   pv: 3908,
//   //   // amt: 2000
//   // },
//   // {
//   //   name: "Page E",
//   //   uv: 1890,
//   //   pv: 4800,
//   //   // amt: 2181
//   // },
//   // {
//   //   name: "Page F",
//   //   uv: 2390,
//   //   pv: 3800,
//   //   // amt: 2500
//   // },
//   // {
//   //   name: "Page G",
//   //   uv: 3490,
//   //   pv: 4300,
//   //   // amt: 2100
//   // }
// ];
// console.log(data);
function Chart(props) {  
  // console.log(data);
  const { classes } = props
  const [chartdata, setData] = useState([])

  const onDataChange = (items)=> {
    var peds = {};
    var bikes = {};
    var cars = {};
    items.forEach((item)=>{
      if(item.key=='Pedestrians'){
        peds = item.val();
      }
      if(item.key=='Bikes'){
        bikes = item.val();
      }
      if(item.key=='Cars'){
        cars = item.val();
      }
    });
    // console.log(peds['Entry-1'].Date_Time_UTC);
    console.log(bikes);
    console.log({cars});
    // console.log((peds['Entry-1'].Date_Time_UTC).toDate());
    var date = (moment(peds['Entry-1'].Date_Time_UTC, "DD/MM/YYYY")).toDate();
    const startdate = new Date("10-19-2020");
    // console.log(data);
    const data = [];
    for (let x in cars,peds,bikes) {
      
     const obj = {
        date:peds[x].Date_Time_UTC,
        Pedestrians : peds[x].Number_of_peds,
        Cars : cars[x].Number_of_cars,
        Bikes : bikes[x].Number_of_bikes
      };
      data.push(obj);
    }
    setData(data);
    console.log(data); 

    }

    function convertToDate(date){
      return (moment(date, "DD/MM/YYYY").toDate());
    }
  
	
	useEffect(() => {
     firebase.getAll().on("value", onDataChange);
	},[])
  
    return (
      <div className="App" style={{marginTop: "5.5%"}}>
        <header>
        </header>
        <h2 style={{ textAlign: "left" }}>Statistics</h2>

  
        {/* <LineChart
          width={730}
          height={250}
          data={chartdata}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Pedestrians" stroke="#8884d8" />
          <Line type="monotone" dataKey="Cars" stroke="#dd6e7e" />
        </LineChart> */}


<AreaChart width={750} height={250} data={chartdata}
          margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8ccbea" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8ccbea" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#dd6e7e" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#dd6e7e" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorCv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#49c8b0" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#49c8b0" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <XAxis dataKey="date" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Legend />
          <Area type="monotone" dataKey="Pedestrians" stroke="#8ccbea" fillOpacity={1} fill="url(#colorUv)"  dot={true}/>
          <Area type="monotone" dataKey="Cars" stroke="#dd6e7e" fillOpacity={1} fill="url(#colorPv)"  dot={true}/>
          <Area type="monotone" dataKey="Bikes" stroke="#49c8b0" fillOpacity={1} fill="url(#colorCv)"  dot={true}/>
        </AreaChart>


      </div>
    );
  
}
export default withRouter(withStyles(styles)(Chart))