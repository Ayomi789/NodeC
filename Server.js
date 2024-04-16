const http = require('http');
const fs = require('fs');


let html;
fs.readFile('./test.html', (err, data)=>{
    if (err){
        console.error(err);
    } else{
        html= data
    }
})

const server = http.createServer(
    (req, res)=>{
        
        res.setHeader('Content-Type', 'test/html');
        fs.write(data)
                
        res.end();
        // myData,(errr,data)=> {
           // if (errr) {
      //          console.log("Error while writing");
      //      }
      //      console.log(data);
      //    })
    }
)


server.listen(8000,
    ()=>{
    console.log('server dey isten to port 8000');
      }
);