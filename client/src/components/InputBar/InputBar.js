import React from 'react';
import {TextField, Button, RootRef, FormHelperText} from '@material-ui/core'
import Icon from '@material-ui/core/Icon';
import {makeStyles} from '@material-ui/core';
import './inputBar.css';
import {Grid} from '@material-ui/core';
const useStyles = makeStyles(theme =>({
   form : {
      display:"inline-block"
   },
   inputContainer:{
      width:'70vw'
   },
   btnContainer:{
      width:'20vw',
      padding:'10%'
   },

   input : {
    padding: '5%',
    width: '100%',
    fontSize:'1.2em',
   },

   button :{
    textTransform:'uppercase',
    textDecoration: 'none',
    alignContent:'center',
    marginBlock:'center',
    marginTop:'30%',
    width:'100%',
    display:'inline-block',
   }


}));

const InputBar = ({message, setMessage, sendMesssage})=>{
  const classes = useStyles();
  return ( 
    
    
    <form className={classes.form}>
    <Grid container spacing={8}>
    <Grid item xs={10} className={classes.inputContainer}>
    <TextField
    className={classes.input}
    type="Text"
    placeholder="Type a message "
    value={message}
    onChange={(event)=>{setMessage(event.target.value)}}
    onKeyPress ={event => event.key === "Enter" ? sendMesssage(event) : null }
    />  
    </Grid>
    <Grid item xs={2}  className={classes.btnContainer}>
    <Button 
    className={classes.button}
    variant="contained"
     color="primary"
     endIcon={<Icon>send</Icon>}
     type="submit" 
     onClick={event=>sendMesssage(event)}>
     Send
     </Button> 
      </Grid>
    </Grid>
    </form>
   
    
    
    )
}

export default InputBar;