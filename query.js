var mongo = require("mongodb");
var host = "127.0.0.1";
var port = mongo.Connection.DEFAULT_PORT;

//wrapping it inside a function
function getUser(id,callback) {

	var db = new mongo.Db("nodejs-introduction" , new mongo.Server(host , port , {})); //creating database with name nodejs-introduction
	db.open(function(error){
		console.log("We are connected " +host+":"+port);

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

getUser(1,function(user) {
	if (!user) {
		console.log('No user found');
	} else {
		console.log('we have a user: ' , user);
	}
});