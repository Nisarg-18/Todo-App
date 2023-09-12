const mongoose = require("mongoose");

const URL = process.env.MONGO_URL;

function connectToDb() {
  mongoose
    .connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to DB");
    });
}

module.exports = connectToDb;
