import React, {useState,useEffect} from 'react';
import io from 'socket.io-client';
import { TextField, Grid } from '@material-ui/core';
import NavBar from '../NavBar/NavBar';
import RoomBar from '../RoomBars/RoomBar';
import Messages from '../Messages/Messages';
import InputBar from '../InputBar/InputBar';
import './Chat.css';
let socket;

const Chat = ({location}) => {
    let [user,setUser] = useState('');
    const [rooms,setRooms]=useState([]);
    const [room,setRoom] = useState('general');
    const [message, setMessage]= useState('');
    const [messages, setMessages] = useState([]);
    const SERVER = 'localhost:5000';

    useEffect(() => {
    
   
    const {name} = location.state;
    setUser(user = name);
   
    socket = io.connect(SERVER);
    
    socket.emit('join',{user,room},()=>{});

    return() =>{
      socket.emit("disconnect");
      socket.off();
    }
    },[SERVER, location ]);
    
    // listen to any change of messages 
    useEffect(()=>{
      socket.on("message", (message)=>{
          setMessages([...messages,message]);

      });

  },[messages]);

    const sendMesssage = (event)  => {
        event.preventDefault();
        if(message)
        {
          socket.emit("sendMessage",message, user, room, ()=>{
              setMessage("");
          });
        }
        
        
    }
  
    return(
      <div className="MainContainer">
        <NavBar user={user} room = {room}/>
        <Grid container spacing ={1}>
          <Grid item xs={2}>
          <RoomBar room={room} />
          </Grid>
          <Grid item xs={10}>
          <div className="messagesContainer"> 
          <Messages messages = {messages} user={user}/>
          </div>
          <div className ="inputContainer">  
          <InputBar message = {message} setMessage= {setMessage} sendMesssage = {sendMesssage}/> 
          </div>
          </Grid>

        </Grid>
      
       </div>
    )
}

export default Chat;