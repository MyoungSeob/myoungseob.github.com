var fs = require("fs");
//node.js의 fs모듈을 사용해 파일을 읽어온다

var input = fs.readFileSync("/dev/stdin").toString().split(" ");
