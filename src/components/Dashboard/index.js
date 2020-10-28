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
import LanguageIcon from '@material-ui/icons/Language';
import firebase from '../firebase';
import Mapone from './map1';
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
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
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

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
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
          <img src="assets/image14.png" width="15%"  />
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
        <Container maxWidth="lg" className={classes.containerr}>
          <Grid container>
            <Grid item md={12} sm={12} container>
              <p style={{ fontSize: "30px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counting
              </p>
            </Grid>
            <Grid container style={{paddingTop: "30px",paddingBottom:"30px",paddingLeft:"10px", borderRadius:"20px", backgroundColor:"white"}}>
            <Grid item container md={11} spacing={3}>
              <Grid item xs>
                <Mapone />
              </Grid>
              <Grid item xs>
                <Mapone />
              </Grid>
              <Grid item xs>
                <Mapone />
              </Grid>
            </Grid>
            <Grid container md={1}>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DirectionsWalkIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DirectionsBikeIcon
                      style={{ color: grey }}
                      fontSize="large"
                    />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DriveEtaIcon style={{ color: grey }} fontSize="large" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
            </Grid>
          </Grid>

          <Grid container >
            <Grid item md={12} sm={12} container>
              <p style={{ fontSize: "30px" }}>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Environment
              </p>
            </Grid>

            <Grid container style={{paddingTop: "30px",paddingBottom:"30px",paddingLeft:"30px", borderRadius:"20px", backgroundColor:"white"}}>
            <Grid item container md={11} spacing={3}>
              <Grid item xs>
                <Mapone />
              </Grid>
              <Grid item xs>
                <Mapone />
              </Grid>
              <Grid item xs>
                <Mapone />
              </Grid>
            </Grid>
            <Grid container md={1}>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DirectionsWalkIcon fontSize="large" />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DirectionsBikeIcon
                      style={{ color: grey }}
                      fontSize="large"
                    />
                  </Badge>
                </IconButton>
              </Grid>
              <Grid item md={12} sm={12}>
                <IconButton color="inherit">
                  <Badge badgeContent={4} color="secondary">
                    <DriveEtaIcon style={{ color: grey }} fontSize="large" />
                  </Badge>
                </IconButton>
              </Grid>
            </Grid>
            
            </Grid>
            <Grid item md={6} style={{marginTop:"3%", marginRight:"1%",paddingTop: "30px",paddingBottom:"30px",paddingLeft:"0px", borderRadius:"20px", backgroundColor:"white"}}>
              <Chart />
            </Grid>
            <Grid item md={6} style={{marginTop:"3%",paddingTop: "30px",paddingBottom:"30px",paddingLeft:"0px", borderRadius:"20px", backgroundColor:"white"}}>
              <Barchart />
            </Grid>
          </Grid>
          <Box pt={4} >
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}




