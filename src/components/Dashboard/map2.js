import React, { useEffect, useState, useRef} from 'react';
import { Typography, Paper, Avatar, Button } from '@material-ui/core'
import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
import withStyles from '@material-ui/core/styles/withStyles'
import firebase from '../firebase'
import { withRouter } from 'react-router-dom'
import mapboxgl from 'mapbox-gl';
import GeoJSON from 'geojson';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginLeft: theme.spacing.unit * 3,
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginLeft: 'auto',
			marginRight: 'auto',
		},
	},
	paper: {
		marginTop: theme.spacing.unit * 8,
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
	},
	avatar: {
		margin: theme.spacing.unit,
		backgroundColor: theme.palette.secondary.main,
	},
	submit: {
		marginTop: theme.spacing.unit * 3,
	},
	map_container :{
		position: 'relative',
		height: '500px',
	width: '100%',
	borderRadius : '30px',
		
	  }
})

mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZHJ1bCIsImEiOiJja2dsNDV3ZHQwMmZzMnBxbjR3MHFmamZ4In0.JYzPwo6Yaf3H1lGDJVpV9Q';

function Maptwo(props) {
	const { classes } = props
	const [geodata, setGeodata] = useState();
	const mapContainerRef = useRef(null);

	const  onDataChange =(items)=> {
        var peds ={};
        var cars = {};
        var bikes ={};
        let pedsdata = [];
        let carsdata = [];
		console.log(items);
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
        
        for (let x in cars,peds) {
      
            const obj1 = {
                name : peds[x].Number_of_peds,
                lat : peds[x].Location.lat,
                lng : peds[x].Location.long
             };
             const obj2 = {
                name : cars[x].Number_of_cars,
                lat : cars[x].Location.lat,
                lng : cars[x].Location.long
           };
             pedsdata.push(obj1);
             carsdata.push(obj2);
           }

		
        let pedsdataGeoJSON = GeoJSON.parse(pedsdata, { Point: ["lat", "lng"] });
        let carsdataGeoJSON = GeoJSON.parse(carsdata, { Point: ["lat", "lng"] });
		
		console.info(pedsdataGeoJSON);
		console.info(geodata);
		setGeodata(pedsdataGeoJSON);
		console.log(geodata);
		// return pedsdataGeoJSON;
		createmap(pedsdataGeoJSON,carsdataGeoJSON);

	  }
	
	useEffect(() => {
		firebase.getAll().on("value", onDataChange);

	},[])


	function createmap(pedsgeojsondata,carsgeojsondata){
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			// See style options here: https://docs.mapbox.com/api/maps/#styles
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [4.5535,11.5207],
			zoom: 3,
		  });

		//   var url = 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson';
		  map.on('load', function () {
		
		//    console.log(geojsondata);
		  map.addSource('earthquakes', { type: 'geojson', data: pedsgeojsondata });
          map.addSource('cars', { type: 'geojson', data: carsgeojsondata });
		  map.addLayer(
			{
			'id': 'earthquakes-heat',
			'type': 'heatmap',
			'source': 'earthquakes',
			'maxzoom': 9,
			'paint': {
			// Increase the heatmap weight based on frequency and property Number_of_pedsnitude
			'heatmap-weight': [
			'interpolate',
			['linear'],
			['get', 'name'],
			0,
			0,
			6,
			1
			],
			// Increase the heatmap color weight weight by zoom level
			// heatmap-intensity is a multiplier on top of heatmap-weight
			'heatmap-intensity': [
			'interpolate',
			['linear'],
			['zoom'],
			0,
			1,
			9,
			3
			],
			// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
			// Begin color ramp at 0-stop with a 0-transparancy color
			// to create a blur-like effect.
			'heatmap-color': [
			'interpolate',
			['linear'],
			['heatmap-density'],
			0,
			'rgba(33,102,172,0)',
			0.2,
			'rgb(103,169,207)',
			0.4,
			'rgb(209,229,240)',
			0.6,
			'rgb(253,219,199)',
			0.8,
			'rgb(239,138,98)',
			1,
			'rgb(178,24,43)'
			],
			// Adjust the heatmap radius by zoom level
			'heatmap-radius': [
			'interpolate',
			['linear'],
			['zoom'],
			0,
			2,
			9,
			20
			],
			// Transition from heatmap to circle layer by zoom level
			'heatmap-opacity': [
			'interpolate',
			['linear'],
			['zoom'],
			7,
			1,
			9,
			0
			]
			}
			},
			'waterway-label'
			);
            map.addLayer(
                {
                'id': 'cars-heat',
                'type': 'heatmap',
                'source': 'cars',
                'maxzoom': 9,
                'paint': {
                // Increase the heatmap weight based on frequency and property Number_of_pedsnitude
                'heatmap-weight': [
                'interpolate',
                ['linear'],
                ['get', 'name'],
                0,
                0,
                6,
                1
                ],
                // Increase the heatmap color weight weight by zoom level
                // heatmap-intensity is a multiplier on top of heatmap-weight
                'heatmap-intensity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                1,
                9,
                3
                ],
                // Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
                // Begin color ramp at 0-stop with a 0-transparancy color
                // to create a blur-like effect.
                'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(0,0,0,0)',
                0.2,
                'rgb(0,0,0)',
                0.4,
                'rgb(0,0,0)',
                0.6,
                'rgb(0,0,0)',
                0.8,
                'rgb(0,0,0)',
                1,
                'rgb(0,0,0)'
                ],
                // Adjust the heatmap radius by zoom level
                'heatmap-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                2,
                9,
                20
                ],
                // Transition from heatmap to circle layer by zoom level
                'heatmap-opacity': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                1,
                9,
                0
                ]
                }
                },
                'waterway-label'
                );
			map.addLayer(
			  {
			  'id': 'earthquakes-point',
			  'type': 'circle',
			  'source': 'earthquakes',
			  'minzoom': 7,
			  'paint': {
			  // Size circle radius by earthquake namenitude and zoom level
			  'circle-radius': [
			  'interpolate',
			  ['linear'],
			  ['zoom'],
			  7,
			  ['interpolate', ['linear'], ['get', 'name'], 1, 1, 6, 4],
			  16,
			  ['interpolate', ['linear'], ['get', 'name'], 1, 5, 6, 50]
			  ],
			  // Color circle by earthquake namenitude
			  'circle-color': [
			  'interpolate',
			  ['linear'],
			  ['get', 'name'],
			  1,
			  'rgba(33,102,172,0)',
			  2,
			  'rgb(103,169,207)',
			  3,
			  'rgb(209,229,240)',
			  4,
			  'rgb(253,219,199)',
			  5,
			  'rgb(239,138,98)',
			  6,
			  'rgb(178,24,43)'
			  ],
			  'circle-stroke-color': 'white',
			  'circle-stroke-width': 1,
			  // Transition from heatmap to circle layer by zoom level
			  'circle-opacity': [
			  'interpolate',
			  ['linear'],
			  ['zoom'],
			  7,
			  0,
			  8,
			  1
			  ]
			  }
			  },
			  'waterway-label'
			  );
		  });
			  // add navigation control (the +/- zoom buttons)
			//   map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
		  
			  // clean up on unmount
			  return () => map.remove();
	}

	if(!firebase.getCurrentUsername()) {
		// not logged in
		alert('Please login first')
		props.history.replace('/login')
		return null
	}


	
    
    return (
		// <main >

			  <div className={classes.map_container} ref={mapContainerRef} />
             
			
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Maptwo))

