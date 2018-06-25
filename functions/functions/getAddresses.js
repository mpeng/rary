const fetch = require("node-fetch");

module.exports = (name = 'patient', callback) => {
  fetch('http://audenty.herokuapp.com/rest/service/getAllAddresses')
	.then(res => res.json())
    .then(function(json){ 
		console.log(json);
		return callback(null, json);
	});
};

