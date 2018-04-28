'use strict';

const url = require('url');

// 解析url
console.log(url.parse('http://user:pass@example.com:8000/path/to/file?a=1&b=2#top'));

// 解析不完整的url
console.log(url.parse('/static/js/jquery.js?name=Hello%20world'));

// 构建一个url
console.log(url.format({
    protocol: 'http',
    hostname: 'localhost',
    pathname: '/static/js',
    query: {
        name: 'Nodejs',
        version: 'v 1.0'
    }
}));

// --------------------------------------------------

const path = require('path');

// 解析当前目录:
let work_dir = path.resolve('.');

// 组合完整的文件路径:
let file_path = path.join(work_dir,'haha','hello.js');

console.log(work_dir); // d:\hikari_git\test\180428
console.log(file_path); // d:\hikari_git\test\180428\haha\hello.js
