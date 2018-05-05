const http = require('http');
const fs = require('fs');


http.createServer(function (request, response) {
	response.writeHead(200, {'Content-Type':'video/mp4'});
	var rs = fs.createReadStream('.mp4');
	rs.pipe(response);
}).listen(5000, function() {
	console.log('Server running at http://127.0.0.1:5000');
});