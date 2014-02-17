var https = require("https");

var username = 'OllieParsley';

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
		var json = JSON.parse(body);
		console.log("Count:" , json.length);
	});

});

request.end();