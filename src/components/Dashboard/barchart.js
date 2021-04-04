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

    const data = [];
    var datas = [];
    for (let x in level) {
      
     const obj = {
        date:level[x].Date_Time_UTC,
        previous_time_period : level[x].AQI+50,
        pms : level[x].AQI
      };
      data.push(obj);
    }
    datas = data.splice(-10);
    setData(datas);
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