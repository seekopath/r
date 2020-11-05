import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';
import PublicIcon from '@material-ui/icons/Public';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import SettingsIcon from '@material-ui/icons/Settings';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import LockIcon from '@material-ui/icons/Lock';
import {Link} from 'react-router-dom';


export const mainListItems = (
  <div>
    <Link to="/dashboard" style={{textDecoration: "none",color:"inherit"}}>
      <ListItem button>
        <ListItemIcon>
          <DesktopMacIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
        <img src="assets/openlock.png" width="29px" height="26px"/>
      </ListItem>
    </Link>
    <Link to="/counting" style={{textDecoration: "none",color:"inherit"}}>
      <ListItem button>
        <ListItemIcon>
          <VerticalSplitIcon />
        </ListItemIcon>
        <ListItemText primary="Counting" />
        <img src="assets/openlock.png" width="29px" height="26px"/>
      </ListItem>
    </Link>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Environment" />
      <img src="assets/openlock.png" width="29px" height="26px"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Connectivity" />
      <img src="assets/closedlock.png" width="29px" height="26px"/>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="Safety" />
      <img src="assets/closedlock.png" width="29px" height="26px"/>
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div>
    {/* <ListSubheader inset>Saved reports</ListSubheader> */}
    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button style={{marginTop: "75%"}}>
      <img src="assets/logo3.png" width="183px" height="82px" />
    </ListItem>
    {/* <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem> */}
  </div>
);