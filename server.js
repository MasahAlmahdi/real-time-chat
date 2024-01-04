const express = require("express");
const socket = require("socket.io");

const PORT = process.env.PORT || 7053;
const app = express();

app.use(express.static("public"));

const server = app.listen(PORT, () => { console.log("http://localhost:" + PORT) });

var sIo = socket(server);
sIo.on("connection", (visitor) => {
    console.log(`${visitor.id}`);
    visitor.on("message", (data) => {
        sIo.sockets.emit('newMessage', data);

    })

});
