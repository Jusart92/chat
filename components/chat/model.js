const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const mySchema = new Schema({
  users: [
    {
      type: Schema.ObjectId,
      reg: "User",
    },
  ],
});

const model = mongoose.model("Chat", mySchema);
module.exports = model;
//
