var socket = io.connect('https://real-time-chat-tuac.onrender.com/');
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
