#!/usr/bin/env node

var fs = require('fs')
var dirName =process.argv[2]

if(fs.existsSync("./"+dirName)){
    process.exit(1);
}else{
    fs.mkdirSync("./"+dirName)
    process.chdir("./"+dirName)
    fs.mkdirSync('css')
    fs.mkdirSync('js')

    fs.writeFileSync("./index.html","<!DOCTYPE>\n<title>Hello</title>\n<h1>Hi</h1>\n")
    fs.writeFileSync("css/style.css","h1{clor red;}\n")
    fs.writeFileSync("./js/main.js","var string =\"Hello World\"\nalert(string)\n")
    process.exit(0)
}
