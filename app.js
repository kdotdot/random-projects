const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index");
});

server = app.listen(3000);

const io = require("socket.io")(server);
io.on("connection", (socket) => {

  socket.username = 'Anonymous';

  socket.emit('new_username', {
    username: socket.username
  });

  socket.on('change_username', (data) => {
    socket.username = data.username;
    socket.emit('new_username', {
      username: socket.username
    });
  });

  socket.on('new_message', (data) => {
    io.sockets.emit('new_message', {
      message: data.message,
      username: socket.username
    });
  })
});