'use strict';

// a simple http server

const
    fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http');

let root = path.resolve('.');

console.log('Static root dir: ' + root);

function http404(req, res) {
    console.log('404 ' + req.url);
    res.writeHead(404);
    res.end('<h1 style=color:red>404 Not Found</h1>');
}

function read_file(req, res, file) {
    console.log('200 ' + req.url);
    res.writeHead(200);
    // response对象是一个Writable流, 用pipe()方法自动读取文件内容并输出到HTTP响应
    fs.createReadStream(file).pipe(res);
}


let server = http.createServer(function (request, response) {
    let
        pathname = url.parse(request.url).pathname,
        filepath = path.join(root, pathname);
    fs.stat(filepath, function (err, stats) {
        if (!err && stats.isFile()) { // 是文件返回文件流
            read_file(request, response, filepath);
            // 请求是目录, 在目录里找index.html或default.html文件
        } else if (!err && stats.isDirectory()) {
            fs.readdir(filepath, function (err, files) {
                if (err) {
                    response.end(err);
                } else {
                    if (files.includes('index.html')) {
                        read_file(request, response, './index.html');
                    } else if (files.includes('default.html')) {
                        read_file(request, response, './default.html');
                    } else { // 没出错, 但是找不到默认文件
                        http404(request, response);
                    }
                }

            })
        } else { // 出错啦
            http404(request, response);
        }
    });
});

server.listen(8000);

console.log('Server is running at http://127.0.0.1:8000/');