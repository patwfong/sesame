var http = require('http');

var port = 9000;

console.log('zzz')

function getIssue1(req, resp){
	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write('<html><head></head><body>test</body>');
	resp.end();
}

function get404(req, resp){
	resp.writeHead(200, {"Content-Type": "text/html"});
	resp.write('<html><head></head><body>404</body>');
	resp.end();
}

var httpServer = http.createServer(function(req, resp){
	switch (req.method){
		case"GET":
		   if(req.url === '/'){
		   	getIssue1(req, resp);
		   }else{
		   	get404(req, resp);
		   }
	}
}).listen(port);

console.log('yyy')