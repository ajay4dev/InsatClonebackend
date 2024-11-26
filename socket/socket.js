const { Server } = require("socket.io");
const express = require("express");
const http = require("http");

const app = express();

const server = http.createServer(app);

const io = new Server(server , {
    cors : {
        origin : 'https://localhost:3000',
        metthods : ['GET' , 'POST']
    }
})

const userSocketMap = {}

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
        userSocketMap[userId] = socket.id;
        console.log(`user connected userId : ${userId} , socketId : ${socket.id}`);    
    }
    io.emit('getOnlineUser', Object.keys(userSocketMap));
    socket.on('disconnect', () => {
       if (userId) {
        console.log(`user disconnected userId : ${userId} , socketId : ${socket.id}`);    
        delete userSocketMap[userId]
       }
       io.emit('getOnlineUser', Object.keys(userSocketMap));

    })
   
})


module.exports = {
    app, 
    server,
    io
}