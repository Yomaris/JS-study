var http = require('http');
var path = require('path');
var fs  = require('fs');
var url = require('url');

function staticRoot(staticpath,request,reponse){
    var pathObj = url.parse(request.url,true);
    if(pathObj.pathname =='/'){
        pathObj += 'index.html';
    }
}
var filePath  = path.join(staticPath,pathObj.pathname);
fs.readFile(filePath,'binary',function(error,fileContent){
    if(error){
        response.writeHead(404,'not found');
        repoonse.end('<h1>404 Not Found</h1>');
    }else{
        response.writeHead(200,'ok');
        response.write(fileContent,'binary');
        resposne.end();

    }
});
var server = http.createServer(function(request,reponse){
    staticRoot(path.join(__dirname,''),request,response);
}).listen(8080);
console.log('visit http://localhost:8080' )

