import React, {Component} from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

type PropsType = {
  logout:()=> void
}

export default class NavBar extends Component<PropsType, {}> {

  render(){
    return (
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar variant="dense" >
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {/* logo */}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 4 }}>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/worldclimate"  variant="contained" color="primary">
            World Climate 
          </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/climatechange"  variant="contained" color="primary">
            Climate Change
          </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/addclimate" variant="contained" color="primary">
            Add Climate
          </Button>
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/editclimate" variant="contained" color="primary">
            Edit Climate
          </Button>
          </Typography>
            
            {/* <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/profile" className="site-link">Profile</Link>
            </Typography> */}

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button component={Link} to="/profile" variant="contained" color="primary">
            Profile
          </Button>
            </Typography>

          <Button color="inherit" onClick={this.props.logout}>Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
  
}