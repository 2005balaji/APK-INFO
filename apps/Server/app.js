const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const schema = require("./models/schema");

const app = express();
app.use(cors());

const data = mongoose.model("apkdetails", schema);

// app.get("/apkinfo", (req, res) => {
//   data
//     .find()
//     .then((data) => res.json(data))
//     .catch((err) => console.log(err));
// });



app.get("/", (req, res) => {
  
  res.send("Hey Welcome to the APK INFO! {apkinfo.tech} . This is a test endpoint!")
});

app.get("/apkinfo/:authId", (req, res) => {
  const { authId } = req.params;
  console.log(req.params);
  data
    .find({ authId })
    .then((result) => {
      if (result) {
        res.status(200).json(result);
      } else {
        res.status(404).json({ message: "APK info not found" });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

app.delete("/apkinfo/:id", (req, res) => {
  const id = req.params.id;
  data
    .findByIdAndRemove(id)
    .then(() => {
      res.status(200).send();
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send();
    });
});

module.exports = app;
