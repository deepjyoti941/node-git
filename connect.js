var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;
var db = new mongo.Db("nodejs-introduction" , new mongo.Server(host , port , {})); //creating database with name nodejs-introduction

db.open(function(error){
	console.log("We are connected " +host+":"+port);

	//creating user collection i.e user table
	db.collection("user" , function(error , collection){ 
		console.log("we have the collection");

		collection.insert({
				id:"1",
				name:"deepjyoti",
				email:"deepjyoti941@gmail.com"
			},function(){
				console.log("successfully inserted deepjyoti's data");
		});

		collection.insert({
				id:"2",
				name:"khakhlary",
				email:"khakhlary@gmail.com"
			},function(){
				console.log("successfully inserted khakhlary's data")
		});
	});
});