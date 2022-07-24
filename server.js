const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const User = require("./models/user");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URL;

mongoose.connect(uri);
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("connexion jawha behi fel DB!");
});

app.listen(3000, () => {
  console.log("serveur yemchi mrigel !");
});

// ! REQUEST SYNTAXE

app.post("/add", async (req, res) => {
  try {
    data = req.body;
    userModel = new User(data);
    finalUser = await userModel.save();
    res.send(finalUser);
  } catch (error) {
    res.send(error);
  }
});



app.get("/get", async (req, res) => {
  try {
    allUsers = await User.find({});
    res.send(allUsers);
  } catch (error) {
    res.send(error);
  }
});

app.get("/getById/:id", async (req, res) => {
  try {
    myId = req.params.id;
    oneUser = await User.findOne({ _id: myId });
    res.send(oneUser);
  } catch (error) {
    res.send(error);
  }
});

app.delete('/delete/:id', async(req,res)=>{
    try {
        myID=req.params.id;
        user = await User.findOneAndDelete({_id : myID});
        res.send("user deleted");
        console.log("🚀 ~ file: server.js ~ line 62 ~ app.delete ~ user", user)
    } catch (error) {
        res.send(error)
    }
})

app.put('/update/:id', async(req,res)=>{
    try {
        myID = req.params.id;
        newData = req.body;
        updateUser= await User.findByIdAndUpdate({_id : myID}, newData)
        res.send(updateUser)
    } catch (error) {
        res.send(error)
    }
})