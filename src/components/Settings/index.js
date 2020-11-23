// import React from 'react'
// import { Typography, Paper, Avatar, Button } from '@material-ui/core'
// import VerifiedUserOutlined from '@material-ui/icons/VerifiedUserOutlined'
// import withStyles from '@material-ui/core/styles/withStyles'
// import firebase from '../firebase'
// import { withRouter } from 'react-router-dom'

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
// })

// function Dashboard(props) {
// 	const { classes } = props

// 	if(!firebase.getCurrentUsername()) {
// 		// not logged in
// 		alert('Please login first')
// 		props.history.replace('/login')
// 		return null
//     }


    
//     return (
// 		<main className={classes.main}>
// 			<Paper className={classes.paper}>
// 				<Avatar className={classes.avatar}>
// 					<VerifiedUserOutlined />
// 				</Avatar>
// 				<Typography component="h1" variant="h5">
// 					Hello { firebase.getCurrentUsername() }
// 				</Typography>
// 				<Button
// 					type="submit"
// 					fullWidth
// 					variant="contained"
// 					color="secondary"
// 					onClick={logout}
// 					className={classes.submit}>
// 					Logout
//           		</Button>
// 			</Paper>
// 		</main>
// 	)

// 	async function logout() {
// 		await firebase.logout()
// 		props.history.push('/')
// 	}
// }

// export default withRouter(withStyles(styles)(Dashboard))



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
// import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from '../Dashboard/listitems';
// import Chart from './Chart';
// import Deposits from './Deposits';
// import Orders from './Orders';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import LanguageIcon from '@material-ui/icons/Language';
// import firebase from '../firebase';
// import Mapone from './map1';
// import Frame from 'react-frame-component';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import { grey, lightGreen } from '@material-ui/core/colors';
import DirectionsBikeIcon from '@material-ui/icons/DirectionsBike';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import firebase from '../firebase'
// import Barchart from './barchart';
import '../Dashboard/index.css';
// import Switch from 'react-switch'
import Switch from '@material-ui/core/Switch';
import SettingsIcon from '@material-ui/icons/Settings';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Terms of Use '}
      <Link color="inherit" href="#">
        Privacy Policy
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

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

export default function Settings() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedC: true,
    checkedD: true,
    checkedE: true,
    checkedF: true,
    checkedG: false,
    checkedH: false,
    checkedI: false,
  });

  
  useEffect(() => {   
    firebase.setting(state.checkedA,state.checkedB,state.checkedC,state.checkedD,state.checkedE,state.checkedF,state.checkedG,state.checkedH,state.checkedI)
  },[state]);
   const handleChange = async (event) => {
    await setState({ ...state, [event.target.name]: event.target.checked });
    // firebase.setting(state.checkedA).then(()=>{
    //   console.log("data submitted")  
    // }).catch((err)=>{
    //     console.log(err)
    // })
    // console.log(state.checkedA)
};

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar 
      elevation={0}
        position="fixed"
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
          {/* <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            UMEA ENERGI
          </Typography> */}
          {/* <img src="assets/image14.png" width="15%"  /> */}
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            
          </Typography>
          <Typography component="h1" variant="h5">
            Hello,{firebase.getCurrentUsername()}&nbsp;&nbsp;&nbsp;|
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
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Settings
                </p>
                </Grid>
                <Grid container style={{padding:"1%", borderRadius:"20px", backgroundColor:"white"}}>
                    
                    <Grid item container md={12} spacing={3}>
                        <Grid item md={12} style={{
                            fontWeight:"700",
                            fontSize:"20px",
                            display:"flex",
                            flexDirection:"row",
                            justifyContent:"center",
                            

                        }}>
                            Modules
                        </Grid>
                        <Grid container item md={1}>
                            <Grid item md={12}><img src="assets/fall.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/fall.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/fall.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/pm.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/cotwo.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/temp.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/fall.png" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/car.jpg" width="29px" height="26px"/></Grid>
                            <Grid item md={12}><img src="assets/bicycle.png" width="29px" height="26px"/></Grid>
                        </Grid>
                        <Grid container item md={11} style={{height:"fit-content"}}>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                        <Switch
                                            checked={state.checkedA}
                                            onChange={handleChange}
                                            name="checkedA"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            People Counting
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                        Detects the number of people that move thru a video frame. Visualize the number of people on an 
                                        interactive map so it is possible to see the different people flows and where and when people are moving. 
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedB}
                                            onChange={handleChange}
                                            name="checkedB"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Bicycle Counting
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects the number of bikes that move thru a video frame. Visualize the number of bikes on an 
interactive map so it is possible to see the different bike flows and where and when bikes are moving. 
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedC}
                                            onChange={handleChange}
                                            name="checkedC"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Car Counting
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects the number of cars that move thru a video frame. Visualize the number of cars on an 
interactive map so it is possible to see the different car flows and where and when cars are moving.  
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedD}
                                            onChange={handleChange}
                                            name="checkedD"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            PM 2.5
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects the PM2.5 and PM10 particles. Visualize the amount of particles on an
interactive heat map so it is possible to see the ug / m3 amount thru the city.
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER DEVICE, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedE}
                                            onChange={handleChange}
                                            name="checkedE"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            CO2
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Analyze the amount of CO2 from vehicles. Visualize the CO2 amount on an
interactive heat map so it is possible to see the CO2 amount thru the city. 
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER DEVICE, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedF}
                                            onChange={handleChange}
                                            name="checkedF"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Temp
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Reads the temperature. Visualize thetemperature on an
interactive heat map so it is possible to see the temperature thru the city.
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER DEVICE, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedG}
                                            onChange={handleChange}
                                            name="checkedG"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Fall Detection
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects if a person falls. Visualize location and time of the fall on a
interactive map so it is possible to see the the frequency and the locations of falls in the city.
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedH}
                                            onChange={handleChange}
                                            name="checkedH"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Car Accident
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects car accidents. Visualize location and time of the accident on a
interactive map so it is possible to see the the frequency and the locations of car accidents in the city.
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            <Grid container md={12}  style={{height:"fit-content",marginBottom:"1%"}}>
                                <Grid container item md={2}>
                                    <Grid item  md={12}>
                                    <Switch
                                            checked={state.checkedI}
                                            onChange={handleChange}
                                            name="checkedI"
                                            inputProps={{ 'aria-label': 'secondary checkbox' }}
                                        />
                                    </Grid>
                                    <Grid item  md={12}>
                                        <Typography style={{fontWeight:"700"}}>
                                            Bike Accident
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item md={7}>
                                    <Typography style={{color:"#4d4f5c",fontSize:"12px",padding:"0 1%"}}>
                                    Detects bike accidents. Visualize location and time of the accident on a
interactive map so it is possible to see the the frequency and the locations of bike accidents in the city. 
                                    </Typography>
                                </Grid>
                                <Grid item md={2}>
                                    <Typography>
                                        <span style={{fontWeight:"700",color:"#fecb2e"}}>&nbsp;&nbsp;$1.73 </span>
                                        <span style={{color:"#4d4f5c",fontSize:"8px"}}> &nbsp;&nbsp;PER CAMERA, MONTH</span>
                                    </Typography>
                                </Grid>
                                <Grid item md={1}>
                                    <IconButton color="inherit">
                                        <SettingsIcon className="iconew" />
                                    </IconButton>
                                </Grid>
                            </Grid>
                            
                        </Grid>
                    </Grid>
            
                </Grid>
          </Grid>

          
          <Box pt={4} >
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );

//   async function setting(checkedA) {
//     try {
//         await firebase.setting(checkedA)
//     } catch(error) {
//         alert(error.message)
//     }
// }
}




