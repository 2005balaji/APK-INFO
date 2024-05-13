const mongoose = require("mongoose");
const schema = require("./schema");
const commands = require("../enum");

const url = commands.mongoUrl;

const apkdetails = mongoose.model("apkdetails", schema);

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

async function mongodb(data) {
  try {
    await apkdetails.create(data);
  } catch (err) {
    console.error("Could not create document", err);
  }
}

module.exports = { apkdetails, mongodb };
