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
    for (let x in cars,peds) {
      
     const obj = {
        date:peds[x].Date_Time_UTC,
        Pedestrians : peds[x].Number_of_peds,
        Cars : cars[x].Number_of_cars
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
      <div className="App" >
        <header>
        </header>
        <h2 style={{ textAlign: "left" }}>Statistics</h2>

  
        <LineChart
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
          <Line type="monotone" dataKey="Pedestrians" stroke="#8884d8" className="line_text" />
          <Line type="monotone" dataKey="Cars" stroke="#82ca9d" className="line_text" />
        </LineChart>
      </div>
    );
  
}
export default withRouter(withStyles(styles)(Chart))