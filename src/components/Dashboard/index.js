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



import React from 'react';
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
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listitems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';
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

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  async function logout() {
		try {
			await firebase.logout();
		} catch(error) {
			alert(error.message)
		}
	}
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
          {/* <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            UMEA ENERGI
          </Typography> */}

          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          ></Typography>
          <Typography component="h1" variant="h6" style={{color:"#707070"}}>
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
                <Grid item md={4} style={{fontSize:"25px",fontWeight:"bold",display:"flex",justifyContent:"center"}}>
                  68
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
                  68
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
                  68
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
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
                </Grid>
                <Grid item xs>
                  <Mapthree />
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
                </Grid>
                <Grid item xs>
                  <Mapfour />
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
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
                <Grid item md={4} style={{fontSize:"9px",fontWeight:"400",display:"flex",justifyContent:"center"}}>
                7ug/m3
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
                <Grid item md={4} style={{fontSize:"9px",fontWeight:"400",display:"flex",justifyContent:"center"}}>
                ppm
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
                <Grid item md={4} style={{fontSize:"9px",fontWeight:"400",display:"flex",justifyContent:"center"}}>
                °C
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
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
                </Grid>
                <Grid item xs>
                  <Mapsix />
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
                </Grid>
                <Grid item xs>
                  <Mapseven />
                  <Typography style = {{textAlign:"center"}}>Label</Typography>
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




