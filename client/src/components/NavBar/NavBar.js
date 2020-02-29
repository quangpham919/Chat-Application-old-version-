import React from 'react';
import { makeStyles} from '@material-ui/core';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {TextField, InputBase} from '@material-ui/core';
const useStyle = makeStyles( theme=>({
  root: {
    flexGrow: 1,
    height:'10vh'
  },
  
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    paddingLeft:'10px',
    flexGrow:2
  },
  icon: {
   fontSize : "small"
  },
  inputField:{
    color: 'inherit',
    
  }
}));


const NavBar= (props) =>{
  const classes = useStyle();
  return(
      <div className ={classes.root}>
          <AppBar position="static">
          <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon></MenuIcon>
          </IconButton>
        
          <Typography variant="h6" className={classes.title}>
            {props.room}
          </Typography>

          <Typography variant="h6" >
          <AccountCircleIcon className={classes.icon}/>{props.user}

          </Typography>
        </Toolbar>
        </AppBar>
      </div>
  )
}

export default NavBar;