import React,{useEffect} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { mainListItems, secondaryListItems } from './listitems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
import NotificationsIcon from '@material-ui/icons/Notifications';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LanguageIcon from '@material-ui/icons/Language';
import firebase from '../firebase';
import Mapone from './map1';
import Maptwo from './map2';
import Mapthree from './map3';
import Mapfour from './map4';
import Mapfive from './map5';
import Mapsix from './map6';
import Mapseven from './map7';
import Frame from 'react-frame-component';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { grey } from '@material-ui/core/colors';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import Button from '@material-ui/core/Button';
import Barchart from './barchart';
import './index.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Terms of Use'}
      <Link color="inherit" href="#">
        Privacy Policy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  containerr: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
}));

var mqtt    = require('mqtt');
var options = {
    protocol: 'ws',
    // clientId uniquely identifies client
    // choose any string you wish
    clientId: 'b0908853',
    username: 'allas_sub',
    password: 'allas',
    port: '8083'    
};
var client  = mqtt.connect('mqtt://q0b02b46.en.emqx.cloud/mqtt', options);

client.subscribe('/python-mqtt/peds');

export default function Dashboard(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const [pds, setPds] = React.useState(0);
  const [bks, setBks] = React.useState(0);
  const [crs, setCrs] = React.useState(0);
  const [aqi, setAqi] = React.useState(0);
  const [cotwo, setCotwo] = React.useState(0);
  const [temp, setTemp] = React.useState(0);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  var note;
  async function logout() {
		try {
      await firebase.logout()
      props.history.replace('/login')
		} catch(error) {
			alert(error.message)
		}
  }

  const  onDataChange =(items)=> {
    var pedssss = {};
    var carssss = {};
    var bikessss = {};
    var aqissss = {};
    var cotwossss = {};
    var tempssss = {};

    items.forEach((item)=>{
      if(item.key=='Pedestrians'){
        pedssss = item.val();
      }
    })
    items.forEach((item)=>{
      if(item.key=='Bikes'){
        bikessss = item.val();
      }
    })
    items.forEach((item)=>{
      if(item.key=='Cars'){
        carssss = item.val();
      }
    })
    items.forEach((item)=>{
      if(item.key=='AQI'){
        aqissss = item.val();
      }
    })
    items.forEach((item)=>{
      if(item.key=='CO2_ppm'){
        cotwossss = item.val();
      }
    })
    items.forEach((item)=>{
      if(item.key=='Temperature'){
        tempssss = item.val();
      }
    })

    for (let x in pedssss, bikessss, carssss){
      setPds(pedssss[x].Number_of_peds)
      setBks(bikessss[x].Number_of_bikes)
      setCrs(carssss[x].Number_of_cars)
      setAqi(aqissss[x].AQI)
      setCotwo(cotwossss[x].CO2_ppm)
      setTemp(tempssss[x].Temperature)
   }

  }


  useEffect(()  => {
    client.on('message', function (topic, message) {
      note = message.toString();
      // Updates React state with message 
      console.log("hello");
      console.log(note);
      client.end();
      });
      client.on('connect', function () {
        client.subscribe('/python-mqtt/peds', function (err) {
          if (!err) {
            client.publish('/python-mqtt/peds', 'Hello mqtt')
          }
        })
      });
    firebase.getAll().on("value", onDataChange);
  });


  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        elevation={0}
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="none"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <Typography component="h1" variant="h6" style={{color:"#707070",fontSize:'1rem'}}>
            Hello&nbsp;, {firebase.getCurrentUsername()}&nbsp;&nbsp;&nbsp;|
          </Typography>
          <Divider orientation="vertical" />
          <IconButton color="inherit">
            <LanguageIcon className="iconew" />
          </IconButton>
          <IconButton color="inherit">
            <QuestionAnswerIcon className="iconew" />
          </IconButton>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon className="iconew" />
            </Badge>
          </IconButton>
          <IconButton color="inherit">
            <ExitToAppIcon className="iconew" onClick = {logout}/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="xl" className={classes.containerr}>
          <Grid container>
            <Grid item md={12} sm={12} container>
              <p style={{ fontSize: "30px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counting
              </p>
            </Grid>
            <Grid
              container
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "10px",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            >
              <Grid item container md={2} style={{}}>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/walk.png"
                    width="49px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>Pedestrians/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"25px",fontWeight:"bold",display:"flex",justifyContent:"center"}} onload="pedss()">
                  {pds}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart1.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/cycle.png"
                    width="25px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>Bikes/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"25px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                  {bks}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart2.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/cars.png"
                    width="33px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>Cars/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"25px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                  {crs}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart3.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
              </Grid>

              <Grid item container md={9} spacing={3}>
                <Grid item xs>
                  <Mapone />
                  <Typography style = {{textAlign:"center"}}>Pedestrians</Typography>
                </Grid>
                <Grid item xs>
                  <Mapthree />
                  <Typography style = {{textAlign:"center"}}>Bikes</Typography>
                </Grid>
                <Grid item xs>
                  <Mapfour />
                  <Typography style = {{textAlign:"center"}}>Cars</Typography>
                </Grid>
              </Grid>
              <Grid container md={1}>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/walk.png"
                    width="49px"
                    height="25px" 
                  />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/cycle.png"
                    width="25px"
                    height="25px"
                  />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/cars.png"
                    width="33px"
                    height="25px"
                  />
                    </Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <Grid container>
            <Grid item md={12} sm={12} container>
              <p style={{ fontSize: "30px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Environment
              </p>
            </Grid>





            <Grid
              container
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            >



              <Grid item container md={2} style={{}}>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/pm.png"
                    width="47px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>PM2.5/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"20px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                {aqi}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart4.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/cotwo.png"
                    width="25px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>ppm/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"20px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                {cotwo}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart5.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
                <Grid item md={4} style={{display:"flex",justifyContent:"center"}}>
                  <img
                    src="assets/temp.png"
                    width="25px"
                    height="25px"
                  />
                </Grid>
                <Grid item md={8}>
                  <Typography style={{color:"#A1A0AE"}}>°C/hr</Typography>
                </Grid>
                <Grid item md={4} style={{fontSize:"20px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                {temp}
                </Grid>
                <Grid item md={8}>
                  <img
                    src="assets/barchart6.png"
                    width="112px"
                    height="30px"
                  />
                </Grid>
              </Grid>



              <Grid item container md={9} spacing={3}>
                <Grid item xs>
                  <Mapfive />
                  <Typography style = {{textAlign:"center"}}>PM 2.5</Typography>
                </Grid>
                <Grid item xs>
                  <Mapsix />
                  <Typography style = {{textAlign:"center"}}>ppm</Typography>
                </Grid>
                <Grid item xs>
                  <Mapseven />
                  <Typography style = {{textAlign:"center"}}>°C</Typography>
                </Grid>
              </Grid>
              <Grid container md={1}>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/pm.png"
                    width="47px"
                    height="25px"
                  />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/cotwo.png"
                    width="25px"
                    height="25px"
                  />
                    </Badge>
                  </IconButton>
                </Grid>
                <Grid item md={12} sm={12} style={{display:"flex",flexDirection:"row-reverse"}}>
                  <IconButton color="inherit">
                    <Badge badgeContent={4} color="secondary">
                      <img
                    src="assets/temp.png"
                    width="25px"
                    height="25px"
                  />
                    </Badge>
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
            <div className="flexchart">
              <Grid
                item
                style={{
                  marginRight: "3%",
                  marginTop: "3%",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  paddingRight: "1%",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  width:"inherit",
                }}
              >
                <Chart />
              </Grid>
              <Grid
                item
                style={{
                  marginTop: "3%",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  paddingLeft: "1%",
                  borderRadius: "20px",
                  backgroundColor: "white",
                  width:"inherit",
                }}
              >
                <Barchart />
              </Grid>
            </div>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}




