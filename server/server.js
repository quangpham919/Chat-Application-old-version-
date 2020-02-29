const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const historyRouter = require('./routes/historyRouter');
const eventRouter = require('./routes/eventRouter');
const roomRouter = require('./routes/roomRouter');
const cors = require('cors');


dotenv.config();

app.use(cors);
app.use(bodyParser.json());


const PORT = process.env.PORT || 5000; 


mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true, useUnifiedTopology: true});

const connection = mongoose.connection;
mongoose.set('useFindAndModify', false);

connection.once('open',()=>{
  console.log("MongoDB database connection established successfully");
});

app.use('/api/history', historyRouter);
app.use('/api/event',eventRouter);
app.use('/api/room',roomRouter)


const http = require('http').createServer(app);

http.listen(PORT, () => {
    console.log(`Server has started, listening on port ${PORT}`);

})

//define socket.io
const io = require('socket.io')(http);


 io.on("connection",(socket)=>{
   console.log(" A user has connected!!");
   
   socket.on('join', ({user,room}) =>{
     console.log(`${user} ${room}`);

     
     // Notice the user who has joined the room
     socket.emit("message", { user: 'admin', text : `${user}, welcome to the room ${room}`, event:"JOINED"});
     // Noctice other users in the room
     socket.broadcast.to(room).emit('message', {user: 'admin' , text : `${user}, has joined!`});
     
     socket.join(room);
    
   });
   

   socket.on('sendMessage', (message,user,room,callback)=>{
    
    io.to(room).emit("message", {user: user, text : message , event: "MESSAGING" })

    callback();
   });

   socket.on('typing',()=>{
      socket.broadcast.emit('typing',{username:socket.username});
   })

   socket.on("stop-typing",() =>{
      socket.broadcast.emit("stop-typing");
   })

   socket.on('disconnect',function(){
     socket.emit("DISCONNECT", {event : "DISCONNECTED"})
     console.log("a user has disconnected!!! ");
   })
 }) 