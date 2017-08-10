const http = require('http');
//const path = require('path');
const url = require('url');
const host = '127.0.0.1';
const port = 8888;

function start(route,handle) {
    function onRequest(req, res) {
        const pathname = url.parse(req.url).pathname;
        if(pathname == '/favicon.ico'){ 
            return;
        }
        console.log(pathname+' 路由已接收');
        const content = route(handle, pathname);

        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html;charset=utf-8');
        res.write(content);
        res.end();
    }

    http.createServer(onRequest).listen(port, host, function () {
        console.log('服务器 '+host + ':' + port + ' 正在运行中....')
    });

}

exports.start = start;