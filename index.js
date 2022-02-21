const express = require("express");
const app = express();
const SearchObject = require("./Scrapper");
const port = 3000;
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://darshanraut123:darshanraut123@cluster0.wg7kk.mongodb.net/web-scrapper?retryWrites=true&w=majority',(error)=>{
    if(!error){
        console.log("Connected to the database")
    }
    console.log(error)
    console.log(error)
});

app.use(express.json());

app.get("/", (req, res) => {
  req.body;
  res.send({ data: "Welcome" });
});

app.post("/",(req,res)=>{
    

    res.send(req.body)
})
//mongodb+srv://darshanraut123:darshanraut123@cluster0.wg7kk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
app.listen(port, () => {
  console.log("Server is started!!");
});

