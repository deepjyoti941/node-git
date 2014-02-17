var https = require("https");

function getRepos(username, callback) {

	var options = {
		headers: {'user-agent': 'deepjyoti941'},
		host: 'api.github.com',
		path: '/users/'+username+'/repos',
		method: 'GET'
	};

	var request = https.request(options, function(response){
		
		var body = '';
		
		response.on("data" , function(chunk){
			body += chunk.toString('utf8');
		});
		response.on("end" , function(){
			var repos = [];
			var json = JSON.parse(body);
			json.forEach(function(repo){
				repos.push({
					name: repo.name,
					description: repo.description
				});
			})
			//console.log("Repos:" ,repos);
			//console.log("Count:" , json.length);
			callback(repos);
		});

	});

	request.end();

}

getRepos("OllieParsley", function(repos){
	console.log("OllieParsley has " +repos.length+ " repos");
});

getRepos("deepjyoti941", function(repos){
	console.log("Deepjyoti has " +repos.length+ " repos");
});




