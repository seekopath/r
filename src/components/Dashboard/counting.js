import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { mainListItems, secondaryListItems } from "./listitems";
import Chart from "./Chart";
import Deposits from "./Deposits";
import Orders from "./Orders";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import LanguageIcon from "@material-ui/icons/Language";
import firebase from "../firebase";
import Maptwo from "./map2";
import Frame from "react-frame-component";
import DirectionsWalkIcon from "@material-ui/icons/DirectionsWalk";
import { grey } from "@material-ui/core/colors";
import DirectionsBikeIcon from "@material-ui/icons/DirectionsBike";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DesktopMacIcon from "@material-ui/icons/DesktopMac";
import VerticalSplitIcon from "@material-ui/icons/VerticalSplit";
import PublicIcon from "@material-ui/icons/Public";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import SettingsIcon from "@material-ui/icons/Settings";
import LockOpenIcon from "@material-ui/icons/LockOpen";
import LockIcon from "@material-ui/icons/Lock";
import BarChartIcon from "@material-ui/icons/BarChart";
import ReportProblemOutlinedIcon from "@material-ui/icons/ReportProblemOutlined";
import "./index.css";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Terms of Use "}
      <Link color="inherit" href="#">
        Privacy Policy
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  containerr: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
}));

export default function Counting(props) {
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
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Counting
              </p>
            </Grid>
            <Grid
              container
              style={{
                paddingTop: "30px",
                paddingBottom: "30px",
                paddingLeft: "30px",
                paddingRight: "1%",
                borderRadius: "20px",
                backgroundColor: "white",
              }}
            >
              <Grid item container md={9} spacing={3}>
                <Grid container item xs md={4}>
                  <Grid item md={4}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <DirectionsWalkIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                  </Grid>
                  <Grid container item md={8}>
                      <Grid item md={12}>
                          <Typography style={{fontSize:"13px"}}>
                              Pedestrians/hr
                          </Typography>
                      </Grid>
                      <Grid container item md={12}>
                          <Grid item md={4} style={{alignSelf:"center"}}>
                              <Typography style={{fontSize:"25px", fontWeight: "700",alignItems: "center"}}>
                                  {firebase.settingdata("people_counting") ?<div>NA</div> : <div>88</div>}
                              </Typography>
                          </Grid>
                          <Grid item md={8}>
                              <img src="assets/barchart1.png" width="104spx" height="40px" />
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid container item xs md={4}>
                  <Grid item md={4}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <DirectionsBikeIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                  </Grid>
                  <Grid container item md={8}>
                      <Grid item md={12}>
                          <Typography style={{fontSize:"13px"}}>
                              Bikes/hr
                          </Typography>
                      </Grid>
                      <Grid container item md={12}>
                          <Grid item md={4} style={{alignSelf:"center"}}>
                              <Typography style={{fontSize:"25px", fontWeight: "700",alignItems: "center"}}>
                              {firebase.settingdata("bike_accident") ?<div>NA</div> : <div>88</div>}
                              </Typography>
                          </Grid>
                          <Grid item md={8}>
                              <img src="assets/barchart2.png" width="104spx" height="40px" />
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid container item xs md={4}>
                  <Grid item md={4}>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <DriveEtaIcon fontSize="large" />
                        </Badge>
                    </IconButton>
                  </Grid>
                  <Grid container item md={8}>
                      <Grid item md={12}>
                          <Typography style={{fontSize:"13px"}}>
                              Cars/hr
                          </Typography>
                      </Grid>
                      <Grid container item md={12}>
                          <Grid item md={4} style={{alignSelf:"center"}}>
                              <Typography style={{fontSize:"25px", fontWeight: "700",alignItems: "center"}}>
                              {firebase.settingdata("car_detection") ?<div>NA</div> : <div>88</div>}
                              </Typography>
                          </Grid>
                          <Grid item md={8}>
                              <img src="assets/barchart3.png" width="104spx" height="40px" />
                          </Grid>
                      </Grid>
                  </Grid>
                </Grid>
                <Grid item xs md={12}>
                  <Maptwo />
                </Grid>
              </Grid>
              
              <Grid container md={3} style={{marginLeft:"1%",boxShadow: "0px 0px 25px -10px rgba(0,0,0,0.75)",height:"fit-content",}} >
                <Grid item md={12} sm={12}>
                  <ListItem button>
                    <ListItemIcon>
                      <ReportProblemOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="ALERTS Last 24h" />
                  </ListItem>
                  <Divider />
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/fall.png" width="29px" height="26px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Fall Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Location 14.31" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/lying.jpeg" width="35px" height="20px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Lying on street Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Location 14.31" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}} >
                  <img src="assets/bicycle.png" width="32px" height="32px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Pedestrian hit by bike Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Location 14.31" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/fall.png" width="29px" height="26px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Fall Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Location 14.31" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid container md={12} sm={12}>
                  <Grid item md={2} sm={2} style={{padding:"2%"}}>
                  <img src="assets/car.jpg" width="40px" height="25px"/>
                  </Grid>
                  <Grid item md={10} sm={10}>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Pedestrian hit by car Detected" />
                    </Grid>
                    <Grid item md={12} sm={12}>
                      <ListItemText primary="Location 14.31" />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={12} sm={12}>
                  <Typography style={{ display: "flex",flexDirection: "row",alignSelf: "center",alignItems: "center", justifyContent: "center",marginTop:"90%" }}>
                    See All
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
