var socket = io.connect('http://localhost:7053');
var userName = document.getElementById("usrname");
var userMsg = document.getElementById("msg");
var btnSend = document.getElementById("btn");
var chatDiv = document.getElementById("chat");

btnSend.addEventListener("click", () => {
    socket.emit("message", {
        userName: userName.value,
        userMsg: userMsg.value
    });

})
socket.on("newMessage", (data) => {
    chatDiv.innerHTML += '<div id="client">' + data.userName + ':</div><div>' + data.userMsg + "</div>";

})