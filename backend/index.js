const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 4000;

io.on("connection", socket => {
	console.log("a user connected :D");

	var hostCode = "hostcode";
	var clientCode = "clientcode";
	// this is for host
	socket.on("codeGenerate", code => {
		hostCode = code;
		socket.join(hostCode);
	});
	// this is for client
	socket.on("codeSent", code => {
		var rooms = io.sockets.adapter.rooms;
		var tmp = JSON.stringify(rooms);
		var flag = tmp.includes(code);
		if(flag) {
			socket.join(code);
			clientCode = code;
			io.in(code).emit("noticeCodeAuth", true);
			io.in(code).emit("wantQNum", true);
		}
		socket.emit("noticeCodeAuth", false);
	});

	// this is for get qNum
	socket.on("hereQnum", data => {
		io.in(data.port).emit("getQNum", data.qNum);
	});
	// notify new user is connected.
	socket.on("newUser", data => {
		io.in(data.port).emit("allUser", data);
	});

	socket.on("giveAllUsers", data => {
		io.in(data.port).emit("userGroup", data);
	});

	socket.on("startGame", data => {
		io.in(data.port).emit("startClient", data);
	});

	socket.on("sAnswer", data => {
		io.in(data.port).emit("Ansarrive", data);
	})

	socket.on("goScore", data => {
		io.in(data.port).emit("goScoreBoard", data);	
	});

	socket.on("restart", data => {
		io.in(data.port).emit("restartGame", data);
	});

	socket.on("goStart", data => {
		io.in(data.port).emit("goStartClient", data);	
	});	
});

server.listen(port, () => console.log("server running on port" + port));