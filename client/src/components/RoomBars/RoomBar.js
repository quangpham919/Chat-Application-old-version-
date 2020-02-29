import React,{useState} from 'react';
import {makeStyles, ThemeProvider, InputBase, TextField} from '@material-ui/core';
import {Grid, Button} from "@material-ui/core";
import {Add} from "@material-ui/icons"
import CreateRoomForm from './CreateRoomForm'

const useStyles = makeStyles(theme => ({
    root:{
     margin:  theme.spacing(1),
     color :  theme.palette.text.secondary,
     height : '75vh'
    },

    button:{
    marginLeft:'5%',
    width:'60%',
    },

    addField:{
      display:'flex',
    
    },

    inputField: {
      width:'100%',
      
    }


}));

const RoomBar = (props) =>{
    const classes = useStyles();
    return(
      <div> 
      <Grid container spacing ={2} className={classes.root}>
        <Grid item xs={12}>
        <Button className={classes.button}>
        #{props.room}
        </Button>
        </Grid>
       </Grid>
       <CreateRoomForm />
       </div>
    ) 
}

export default RoomBar