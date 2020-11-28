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
  BarChart,
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
function Barchart(props) {  
  // console.log(data);
  const { classes } = props
  const [barchartdata, setData] = useState([])

  const onDataChange = (items)=> {
    var level = {};

    items.forEach((item)=>{
      if(item.key=='AQI'){
        level = item.val();
      }
      
    });
    // console.log(peds['Entry-1'].Date_Time_UTC);
    // console.log(bikes);
    // console.log({cars});
    // console.log((peds['Entry-1'].Date_Time_UTC).toDate());
    // var date = (moment(peds['Entry-1'].Date_Time_UTC, "DD/MM/YYYY")).toDate();
    // const startdate = new Date("10-19-2020");
    // console.log(data);
    const data = [];
    for (let x in level) {
      
     const obj = {
        date:level[x].Date_Time_UTC,
        previous_time_period : level[x].AQI+50,
        pms : level[x].AQI
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
        <h2 style={{ textAlign: "left" }}>PM 2.5</h2>

        <ComposedChart
        width={750}
        height={300}
        data={barchartdata}
        barGap ={1} 
        margin={{
          top: 5, right: 30, left: 20, bottom: 5,

     
        }
    }
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="pms" fill="#8884d8"   barSize={20} />
        <Line name="Previous time period" type="monotone" dataKey="previous_time_period" stroke="#ff7300" />
        {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </ComposedChart>
      </div>
    );
  
}
export default withRouter(withStyles(styles)(Barchart))