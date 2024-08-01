const http = require('http');
const fs = require('fs')
var url = require('url');

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': ' application/json'});
    let parse = url.parse(request.url,true)
    //const data = fs.readFileSync('.'+decodeURI(request.url))
    // 发送响应数据 "Hello World"
    /*response.end(JSON.stringify({
        data: data.toString()
    }));*/
    //console.log(parse)
    //console.log()
    let data = null
    if (fs.existsSync('.'+parse.pathname)) {
        data =  require('.'+parse.pathname)(parse.query)
      }
    
    response.end(data)
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
