console.log(__dirname);
console.log(__filename);

const path = require("path");
const fs = require("fs");
const url = "/node-project/mern-ecommers/backend/server.js";
const url1 = "/node-project/mern-ecommers";
const url2 = "/frontend/src/App.js";

console.log("basename:", path.basename(url));
console.log("remove extension from base name:", path.basename(url, "js"));
console.log("dirname:", path.dirname(url));
console.log("extension:", path.extname(url));
console.log("join:", path.join(url1, url2));
console.log("resolve:", path.resolve("user/hello/hi", "component", "index.js"));
console.log("parse:", path.parse(url));

//real world example

const finalPath = path.join(__dirname, "data", "hello.txt");
console.log("final path:", finalPath);
fs.writeFileSync(finalPath, "hello world");
const data = fs.readFileSync(finalPath, "utf-8");
console.log("created file data:", data);
// console.log("create folder:", fs.mkdirSync("data2"));
// console.log("remove folder:", fs.rmdirSync("data2"));
//to check whether file exists or not
if(fs.existsSync('data/hello.txt')){
    console.log("File exists!");
}else{
    console.log("File does not exist!");
}














