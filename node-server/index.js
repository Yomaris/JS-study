//分析Node.js 的 HTTP 服务器：
//第一行请求（require）Node.js 自带的 http 模块，并且把它赋值给 http 变量。
//接下来我们调用 http 模块提供的函数： createServer 。这个函数会返回 一个对象，这个对象有一个叫做 listen 的方法，这个方法有一个数值参数， 指定这个 HTTP 服务器监听的端口号。
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

//create server
http.createServer(function(request,response){
    //Parse the request,include the file name
    var pathObj = url.parse(request.url);
    switch(pathObj.pathname){
        case '/getWeather':
        var ret;
        if (pathObj.query.city == 'beijing'){
            ret = {
                city:'beijing',
                weather:'晴天'
            };
        }else{
            ret = {
                city: pathObj.query.city,
                weather:'不知道'
            };
        }
        response.end(JSON.stringify(ret));
        break;
        default:
        response.end( fs.readFileSync(__dirname + '/sample' + pathObj.pathname));

    }
    
}).listen(8080);
// 控制台会输出以下信息
console.log('Server running at http://127.0.0.1:8080/');