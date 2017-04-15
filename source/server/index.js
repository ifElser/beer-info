'use strict';

/**
 * Writed for node.js v0.8.6, running on old VPS
 * API URL: http://terezanov.ru:8080/api/
 */

var http = require('http');
var url = require('url')

http.createServer(function(req, res) {

	var isApi = /^\/api\//;
	var apiUrl = url.parse(req.url);
	if(isApi.test(apiUrl.pathname)){
		console.log(apiUrl);
		var proxy = http.get(
			'http://api.brewerydb.com/v2' + apiUrl.pathname.split('/api')[1] +
			'?key=f14f49a8edc2d2fae16ffacb3024bc1b&' + apiUrl.query,
			function(response){
				response.on('data', function(data){
					res.setHeader('Access-Control-Allow-Credentials', 'true');
					res.setHeader('Access-Control-Allow-Origin', '*');
					res.end(data.toString());
				})
			}
		);
	} else res.end(JSON.stringify({test:"ok"}));

}).listen(8080);
