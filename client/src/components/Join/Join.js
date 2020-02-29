import  React,  {useState} from 'react';
import {Link } from 'react-router-dom';
import {Button,TextField} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import "./Join.css";

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 48,
    padding: '0 30px',
    marginTop:'20px'
    
  },
  input:{
    width: '100%',
    marginTop:"20px",
    color:'white',
    
  }
 
})



const Join = () => {
  
  const [name, setName] = useState('');
  const [error, setError] = useState(false);
  const [errorText,seterrorText] = useState('');

  const classes = useStyles();

  const hanldeClick = (event)=>{
    if(!name ){
      event.preventDefault();
      setError(true);
      seterrorText('You must choose a nickname');
    } 
    else {
      
    }
  }

  const handleChange = (event)=>{
      setName(event.target.value);
  }

  return (  
      <div className = "SignInContainer">
        <div className="InnerContainer">
          <h1>Hi, Sign In with a name</h1>
          <div className="nameInput"><TextField error={error}  helperText={errorText}   label="Name" type = "text" className={classes.input}  onChange={handleChange}   /> </div>
      
          <Link className="link" onClick={hanldeClick}  to={{pathname:'/t' 
                                                            , state:{ name}
          }}>
              <Button variant="contained"  type="submit" className={classes.root}> Sign In </Button> 
          </Link>
        </div> 
       </div>
  )






  }
export default Join;