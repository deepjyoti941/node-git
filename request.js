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
		console.log("Body:" , body);
	});

});

request.end();