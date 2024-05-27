const express = require('express');
const app = express();
const server = require('http').Server(app);
const cors = require('cors');
app.use(cors());

const users = [];

const addUser = (userName, roomId) => {
  users.push({userName: userName, roomId: roomId});
};

const removeUser = (userName, roomId) => {
  users.filter(user => user.userName !== userName && user.roomId !== roomId);
};

const getRoomUsers = roomId => {
  return users.filter(user => user.roomId === roomId);
};

const io = require('socket.io')(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST'],
  },
});

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello from Server!');
});

io.on('connection', socket => {
  console.log('User connected');

  socket.on('message', message => {
    console.log(`Received message: ${message}`);
    io.emit('message', message);
  });

  socket.on('join-room', ({roomId, username}) => {
    console.log(`User ${username} joined roomId: ${roomId}`);
    socket.join(roomId);
    addUser(username, roomId);
    socket.to(roomId).emit('user-connected', username);

    io.to(roomId).emit('room-users', getRoomUsers(roomId));
    socket.on('disconnect', () => {
      console.log(`User ${username} disconnected`);
      removeUser(username, roomId);
      io.to(roomId).emit('room-users', getRoomUsers(roomId));
    });
  });

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
