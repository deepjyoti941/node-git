var myModule = require("./my_module.js");
var github = require("./github.js");
console.log("Hello: " , myModule.hello());

github.getRepos("deepjyoti941" , function(repos){
	console.log("Deepjyoti repos ", repos);
})