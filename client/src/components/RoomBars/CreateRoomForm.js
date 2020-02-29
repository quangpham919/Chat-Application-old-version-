import React,{useState} from 'react';
import {makeStyles, ThemeProvider, InputBase, TextField} from '@material-ui/core';
import {Grid, Button} from "@material-ui/core";
import {Add} from "@material-ui/icons"

const useStyles = makeStyles(theme => ({
  
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

const CreateRoomForm = ({room,setRoom}) => { 
  const {roomHolder,setRoomHolder} = useState('');
  const classes = useStyles();
  

return (
  <div className={classes.addField}>
  <TextField 
       value={roomHolder}
       onChange={event => setRoomHolder(event.target.value)}
       className='inputField'
       placeholder="Create a room">
       </TextField> 
       <Button
       className={classes.button}
       variant="contained"
       color="primary"
       startIcon={<Add/>}>
       Save
       </Button>
  </div>
)
}

export default CreateRoomForm;