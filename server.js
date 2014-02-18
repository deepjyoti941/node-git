var fs = require("fs");
var express = require("express");
var config = JSON.parse(fs.readFileSync("config.json"));
var host = config.host;
var port = config.port;

var mongo = require("mongodb");
var dbHost = "127.0.0.1";
var dbPort = mongo.Connection.DEFAULT_PORT;

var app = express();

app.get("/" , function(request , response){
	response.send("HELLO!!");
});

app.get("/hello/:text" , function(request , response){
	response.send("Hello " + request.params.text);
});

app.get("/user/:id" , function(request , response){
	getUser(request.params.id , function(user){
		if (!user) {
				response.send("User does not exist", 404);
			} else {
				response.send("<a href='http://twitter.com/" + user.name + "'> Follow " + user.name + " on twitter</a>");
			}
	});
});

app.get("*", function(request, response){
	response.send("Oh no!", 404);
});

app.listen(port, host);

function getUser(id,callback) {

	var db = new mongo.Db("nodejs-introduction" , new mongo.Server(dbHost , dbPort , {})); //creating database with name nodejs-introduction
	db.open(function(error){
		console.log("We are connected " +dbHost+":"+dbPort);

		//creating user collection i.e user table
		db.collection("user" , function(error , collection){ 
			console.log("we have the collection");

			collection.find({"id":id.toString()} , function(error , cursor) {
				cursor.toArray(function(error , users){
					if(users.length == 0) {
						callback(false);
					} else {
						callback(users[0]);
					}
				});
			});
		});
	});
}