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
  let key = Object.keys(req.body.data)
  if (key && key.length > 0) {
    key.forEach((id)=>{
      let item = obj.find((ele) => ele.id == id)
      Object.assign(item, req.body.data[id])
    })
  }
  res.send("create Request Successfully").json(obj)
})

app.get("/feedback", (req, res) => {
  res.status(200).json(obj);
});

app.listen(3000, () => {
  console.log("Serve is listening on 3000");
})

