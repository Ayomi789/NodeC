//console.log("Hello world");

//const add = require('./MyModules');

//const {v4: uuidv4}= require('uuid');
//console.log(uuidv4());
//console.log(add(4,5));

const os = require("os")
//console.log(os.cpus());
//console.log(os.hostname());
//console.log(os.userInfo());
//console.log(os.arch());

const fs = require("fs");


//fs.writeFileSync("test.js", "console.log('hello world')")


//Write a file
let mydata = `<h1>Hello world</h1>
                    <h2>I AM HERE </h2>`
fs.writeFile ("test.html", mydata, (errr,data)=> {
  if (errr) {
      console.log("Error while writing");
  }
  console.log(data);
})

//Update file
fs.appendFile("test.html", "<pre>Learning Node</pre>", (err)=>{
    console.log(err);
})


//Read file
fs.readFile("./test.html", "utf-8", (err,data)=>{
    if(err) throw err
    console.log(data);
})

