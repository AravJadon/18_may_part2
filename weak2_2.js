const express = require('express');
const app = express();
 const port = 3000;
const bodyParser=require("body-parser");
//onst port = process.env.PORT ||3000;// jab hum dusre server pe code chala rahe ho to wo hume apna ek port number assign karta he || 3000

app.get('/arav',(req,res)=>{
    //body,header,query parameter
    //do machine learning tool
     console.log('Hello i am arav ');
    res.json({
        name:"Arav Jadon",
        age:18
    })
}) 
app.use(bodyParser.json())//body (user koi message dega eske liye tumhe ek alag framework import karna padega jisko kahte he bodyParser)
// or express.json()
app.post('/convert',(req,res)=>{
  console.log(req.body);
  console.log(req.body.msg); //jo bhi user send kar rha he wo hame eski help se mil jayega 
  //user can connect backend with query 
  console.log(req.query.msg);
  console.log(req.headers["authorization"]);
  // res.send({msg:"2+2=4"});
  setTimeout(()=>{res.send("ye he 1000 ms ke baad message")},1000)
})
app.get('/', (req, res) => { 
  console.log(`Hello, chal loude request aa gyi  ${port}`);
  //  for(let i=0;i<100000000;i++);// ye asnchronous he eliye many users ke liye accha nhi hoga 
   //but database call karne pe  ye schronous hoga to many user ek s  aa  th aakar kaam kar sakte he 
  res.send("<b>abb matttt  werf website band kar </b>");
});
app.listen(port);
// making first commit 
