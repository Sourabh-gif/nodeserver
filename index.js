const express = require('express');
const fs = require("fs");
let obj = {};
const app = express();
app.use(express.json());


fs.readFile("./feedback.json", "utf8", (err, data) => {
  if (err) throw err;
  obj = JSON.parse(data);
});





app.put("/feedback", (req, res) => {
    let key = Object.keys(req)  
    if(key){
    
    }



  res.send("create Request Successfully").json(obj)
})

app.get("/feedback", (req, res) => {
  res.send(obj);
});

app.listen(3000, () => {
  console.log("Serve is listening on 3000");
})

