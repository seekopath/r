// import React, { useEffect, useState, useRef} from 'react';
// import { Typography, Paper, Avatar, Button } from '@material-ui/core'
// import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
// import firebase from '../firebase'
// import { withRouter } from 'react-router-dom'
// import mapboxgl from 'mapbox-gl';



// const styles = theme => ({
// 	main: {
// 		width: 'auto',
// 		display: 'block', // Fix IE 11 issue.
// 		marginLeft: theme.spacing.unit * 3,
// 		marginRight: theme.spacing.unit * 3,
// 		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
// 			width: 400,
// 			marginLeft: 'auto',
// 			marginRight: 'auto',
// 		},
// 	},
// 	paper: {
// 		marginTop: theme.spacing.unit * 8,
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
// 	},
// 	avatar: {
// 		margin: theme.spacing.unit,
// 		backgroundColor: theme.palette.secondary.main,
// 	},
// 	submit: {
// 		marginTop: theme.spacing.unit * 3,
// 	},
// 	map_container :{
// 		position: 'relative',
// 		// top: '0',
// 		// bottom: '0',
// 		// left: '0',
//         // right: '0',
//         height: '230px',
//         width: '100%',
//         borderRadius: '10px',
// 	  }
// })
// mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// function Mapone(props) {
// 	const { classes } = props
// 	const [geodata, setGeodata] = useState([]);
// 	const mapContainerRef = useRef(null);

	
	
// 	useEffect(() => {
// 		firebase.getAll().on("value", onDataChange);
// 		const map = new mapboxgl.Map({
// 			container: mapContainerRef.current,
// 			// See style options here: https://docs.mapbox.com/api/maps/#styles
// 			style: 'mapbox://styles/mapbox/streets-v11',
// 			center: [-104.9876, 39.7405],
// 			zoom: 2,
// 		  });

// 		//   var url = 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson';
// 		  map.on('load', function () {
// 		// 	  var request = new XMLHttpRequest();
// 		// 	  window.setInterval(function () {
// 		// 	  // make a GET request to parse the GeoJSON at the url
// 		// 	  request.open('GET', url, true);
// 		// 	  request.onload = function () {
// 		// 	  if (this.status >= 200 && this.status < 400) {
// 		// 	  // retrieve the JSON from the response
// 		// 	  var json = JSON.parse(this.response);
// 		// 	  console.log(json);
			  
// 		// 	  // update the drone symbol's location on the map
// 		// 	  map.getSource('earthquakes').setData(json);
		   
// 		//   // fly the map to the drone's current location
// 		// //   map.flyTo({
// 		// //   center: json.geometry.coordinates,
// 		// //   speed: 0.5
// 		// //   });
// 		//   }
// 		//   };
// 		//   request.send();
// 		//   }, 2000);
		   
// 		  map.addSource('earthquakes', { type: 'geojson', data: geodata });
		  
// 		  map.addLayer(
// 			{
// 			'id': 'earthquakes-heat',
// 			'type': 'heatmap',
// 			'source': 'earthquakes',
// 			'maxzoom': 9,
// 			'paint': {
// 			// Increase the heatmap weight based on frequency and property magnitude
// 			'heatmap-weight': [
// 			'interpolate',
// 			['linear'],
// 			['get', 'mag'],
// 			0,
// 			0,
// 			6,
// 			1
// 			],
// 			// Increase the heatmap color weight weight by zoom level
// 			// heatmap-intensity is a multiplier on top of heatmap-weight
// 			'heatmap-intensity': [
// 			'interpolate',
// 			['linear'],
// 			['zoom'],
// 			0,
// 			1,
// 			9,
// 			3
// 			],
// 			// Color ramp for heatmap.  Domain is 0 (low) to 1 (high).
// 			// Begin color ramp at 0-stop with a 0-transparancy color
// 			// to create a blur-like effect.
// 			'heatmap-color': [
// 			'interpolate',
// 			['linear'],
// 			['heatmap-density'],
// 			0,
// 			'rgba(33,102,172,0)',
// 			0.2,
// 			'rgb(103,169,207)',
// 			0.4,
// 			'rgb(209,229,240)',
// 			0.6,
// 			'rgb(253,219,199)',
// 			0.8,
// 			'rgb(239,138,98)',
// 			1,
// 			'rgb(178,24,43)'
// 			],
// 			// Adjust the heatmap radius by zoom level
// 			'heatmap-radius': [
// 			'interpolate',
// 			['linear'],
// 			['zoom'],
// 			0,
// 			2,
// 			9,
// 			20
// 			],
// 			// Transition from heatmap to circle layer by zoom level
// 			'heatmap-opacity': [
// 			'interpolate',
// 			['linear'],
// 			['zoom'],
// 			7,
// 			1,
// 			9,
// 			0
// 			]
// 			}
// 			},
// 			'waterway-label'
// 			);
		  
// 			map.addLayer(
// 			  {
// 			  'id': 'earthquakes-point',
// 			  'type': 'circle',
// 			  'source': 'earthquakes',
// 			  'minzoom': 7,
// 			  'paint': {
// 			  // Size circle radius by earthquake magnitude and zoom level
// 			  'circle-radius': [
// 			  'interpolate',
// 			  ['linear'],
// 			  ['zoom'],
// 			  7,
// 			  ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
// 			  16,
// 			  ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50]
// 			  ],
// 			  // Color circle by earthquake magnitude
// 			  'circle-color': [
// 			  'interpolate',
// 			  ['linear'],
// 			  ['get', 'mag'],
// 			  1,
// 			  'rgba(33,102,172,0)',
// 			  2,
// 			  'rgb(103,169,207)',
// 			  3,
// 			  'rgb(209,229,240)',
// 			  4,
// 			  'rgb(253,219,199)',
// 			  5,
// 			  'rgb(239,138,98)',
// 			  6,
// 			  'rgb(178,24,43)'
// 			  ],
// 			  'circle-stroke-color': 'white',
// 			  'circle-stroke-width': 1,
// 			  // Transition from heatmap to circle layer by zoom level
// 			  'circle-opacity': [
// 			  'interpolate',
// 			  ['linear'],
// 			  ['zoom'],
// 			  7,
// 			  0,
// 			  8,
// 			  1
// 			  ]
// 			  }
// 			  },
// 			  'waterway-label'
// 			  );
// 		  });
// 			  // add navigation control (the +/- zoom buttons)
// 			  map.addControl(new mapboxgl.NavigationControl(), 'bottom-right');
		  
// 			  // clean up on unmount
// 			  return () => map.remove();
// 	}, [])

// 	if(!firebase.getCurrentUsername()) {
// 		// not logged in
// 		alert('Please login first')
// 		props.history.replace('/login')
// 		return null
// 	}


// 	function onDataChange(items) {
// 		let tutorials = [];
// 		console.log(items);
		
// 		items.forEach((item) => {
			
// 		  let key = item.key;
// 		//   console.log(key);
// 		  let data = item.val();
// 		  console.log(data);
// 		  tutorials.push({
// 			  type : 'feature',
// 			  geometry : {
// 				type: "Point",
// 				// [d["lon"], d["lat"]]
// 				coordinates: data.Location,
// 				},
// 			  properties : data,
// 			// key: key,
// 			// title: data.title,
// 			// description: data.description,
// 			// published: data.published,
// 		  });
// 		});
// 		const geodata = {
// 			"type": "FeatureCollection",
// 			"features": tutorials
// 		}
// 		console.info(geodata);

// 		setGeodata(geodata);
// 		// this.setState({
// 		//   tutorials: tutorials,
// 		// });
// 	  }
    
//     return (
		
// 			<div className={classes.map_container} ref={mapContainerRef} />
			
		
// 	)

// 	async function logout() {
// 		await firebase.logout()
// 		props.history.push('/')
// 	}
// }

// export default withRouter(withStyles(styles)(Mapone))



// // import React from 'react';
// // import mapboxgl from 'mapbox-gl';

// // mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_ACCESS_TOKEN;

// // class Mapone extends React.Component {
// //   constructor(props) {
// //   super(props);
// //     this.state = {
// //       lng: 5,
// //       lat: 34,
// //       zoom: 2
// //     };
// //   }

// //   componentDidMount() {
// //     const map = new mapboxgl.Map({
// //       container: this.mapContainer,
// //       style: 'mapbox://styles/mapbox/streets-v11',
// //       center: [this.state.lng, this.state.lat],
// //       zoom: this.state.zoom
// //     });

// //     map.on('move', () => {
// //       this.setState({
// //         lng: map.getCenter().lng.toFixed(4),
// //         lat: map.getCenter().lat.toFixed(4),
// //         zoom: map.getZoom().toFixed(2)
// //       });
// //     });
// //   }

// //   render() {
// //     return (
// //       <div>
// //         <div className='sidebarStyle'>
// //           <div>Longitude: {this.state.lng} | Latitude: {this.state.lat} | Zoom: {this.state.zoom}</div>
// //         </div>
// //         <div ref={el => this.mapContainer = el} className='mapContainer' />
// //       </div>
// //     )
// //   }
// // }

// // export default Mapone;


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
		height: '180px',
	width: '100%',
	borderRadius : '30px',
		
	  }
})
mapboxgl.accessToken = 'pk.eyJ1Ijoic2hhZHJ1bCIsImEiOiJja2dsNDV3ZHQwMmZzMnBxbjR3MHFmamZ4In0.JYzPwo6Yaf3H1lGDJVpV9Q';

function Mapone(props) {
	const { classes } = props
	const [geodata, setGeodata] = useState();
	const mapContainerRef = useRef(null);

	// const  onDataChange =(items)=> {
	// 	let tutorials = [];
	// 	console.log(items);
		
	// 	items.forEach((item) => {
			
	// 	  let key = item.key;
	// 	//   console.log(key);
	// 	  let data = item.val();
	// 	  console.log(data);
	// 	//   tutorials.push({
	// 	// 	  type : 'feature',
	// 	// 	  geometry : {
	// 	// 		type: "Point",
	// 	// 		// [d["lon"], d["lat"]]
	// 	// 		coordinates: [data.Location.lat, data.Location.long],
	// 	// 		},
	// 	// 	  properties :  JSON.stringify(data),
	// 	// 	// key: key,
	// 	// 	// title: data.title,
	// 	// 	// description: data.description,
	// 	// 	// published: data.published,
	// 	//   });
	// 	tutorials.push({
	// 		name : data.Number_of_peds,
	// 		lat : data.Location.lat,
	// 		lng : data.Location.long
	// 	})
	// 	});
	// 	let dataGeoJSON = GeoJSON.parse(tutorials, { Point: ["lat", "lng"] });
	// 	// const geo = {
	// 	// 	"type": "FeatureCollection",
	// 	// 	"features": tutorials
	// 	// }
	// 	console.info(dataGeoJSON);
	// 	console.info(geodata);
	// 	setGeodata(dataGeoJSON);
	// 	console.log(geodata);
	// 	// return dataGeoJSON;
	// 	createmap(dataGeoJSON);
	// 	// this.setState({
	// 	//   tutorials: tutorials,
	// 	// });
	//   }
	
	// useEffect(() => {
	// 	firebase.getAll().on("value", onDataChange);

	// },[])
	const  onDataChange =(items)=> {
        let tutorials = [];
        console.log(items);

        items.forEach((item) => {

          let key = item.key;
          console.log(key);
          let data = item.val();
          console.log(data);
        //   tutorials.push({
        //       type : 'feature',
        //       geometry : {
        //         type: "Point",
        //         // [d["lon"], d["lat"]]
        //         coordinates: [data.Location.lat, data.Location.long],
        //         },
        //       properties :  JSON.stringify(data),
        //     // key: key,
        //     // title: data.title,
        //     // description: data.description,
        //     // published: data.published,
        //   });
        tutorials.push({
            name : data.Number_of_peds,
            lat : data.Location.lat,
            lng : data.Location.long
        })
        });
        let dataGeoJSON = GeoJSON.parse(tutorials, { Point: ["lat", "lng"] });
        // const geo = {
        //     "type": "FeatureCollection",
        //     "features": tutorials
        // }
        console.info(dataGeoJSON);
        console.info(geodata);
        setGeodata(dataGeoJSON);
        console.log(geodata);
        // return dataGeoJSON;
        createmap(dataGeoJSON);
        // this.setState({
        //   tutorials: tutorials,
        // });
      }

    useEffect(() => {
        firebase.getPedestrians().on("value", onDataChange);

    },[])


	function createmap(geojsondata){
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			// See style options here: https://docs.mapbox.com/api/maps/#styles
			style: 'mapbox://styles/mapbox/streets-v11',
			center: [18.077541,59.312111],
			zoom: 5,
		  });

		//   var url = 'https://docs.mapbox.com/mapbox-gl-js/assets/earthquakes.geojson';
		  map.on('load', function () {
		// 	  var request = new XMLHttpRequest();
		// 	  window.setInterval(function () {
		// 	  // make a GET request to parse the GeoJSON at the url
		// 	  request.open('GET', url, true);
		// 	  request.onload = function () {
		// 	  if (this.status >= 200 && this.status < 400) {
		// 	  // retrieve the JSON from the response
		// 	  var json = JSON.parse(this.response);
		// 	  console.log(json);
			  
		// 	  // update the drone symbol's location on the map
		// 	  map.getSource('earthquakes').setData(json);
		   
		//   // fly the map to the drone's current location
		// //   map.flyTo({
		// //   center: json.geometry.coordinates,
		// //   speed: 0.5
		// //   });
		//   }
		//   };
		//   request.send();
		//   }, 2000);
		   console.log(geojsondata);
		  map.addSource('earthquakes', { type: 'geojson', data: geojsondata });
// 		  const marker = new mapboxgl.Marker()
// .setLngLat([11.5207,4.5535])
// .addTo(map);

		// map.addLayer({
		// 	'id': 'earthquakes',
		// 	'type': 'symbol',
		// 	'source': 'earthquakes',
		// 	'layout': {
		// 	'icon-image': 'rocket-15'
		// 	}
		// 	});
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
             
			// {/* <div className={classes.map_container} ref={mapContainerRef} /> */}
			
			// {/* <h1>Hellooo</h1>
			// <Paper className={classes.paper}>
			// 	<Avatar className={classes.avatar}>
			// 		<VerifiedUserOutlined />
			// 	</Avatar>
			// 	<Typography component="h1" variant="h5">
			// 		Hello { firebase.getCurrentUsername() }
			// 	</Typography>
			// 	<Button
			// 		type="submit"
			// 		fullWidth
			// 		variant="contained"
			// 		color="secondary"
			// 		onClick={logout}
			// 		className={classes.submit}>
			// 		Logout
          	// 	</Button>
			// </Paper>
		// </main> */}
	)

	async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default withRouter(withStyles(styles)(Mapone))

