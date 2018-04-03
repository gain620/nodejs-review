var url = require('url');
var queryString = require('querystring');


var parsedObj = url.parse('http://www.bamwar26.com/bbs/board.php?bo_table=200130&wr_id=191234', true);

console.log(parsedObj.query);