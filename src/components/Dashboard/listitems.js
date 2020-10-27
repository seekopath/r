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


export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <DesktopMacIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerticalSplitIcon />
      </ListItemIcon>
      <ListItemText primary="Counting" />
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Environment" />
      <ListItemIcon>
        <LockOpenIcon />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PublicIcon />
      </ListItemIcon>
      <ListItemText primary="Connectivity" />
      <ListItemIcon>
        <LockIcon className="iconred" />
      </ListItemIcon>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <VerifiedUserIcon />
      </ListItemIcon>
      <ListItemText primary="Safety" />
      <ListItemIcon>
        <LockIcon className="iconred" />
      </ListItemIcon>
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