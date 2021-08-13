const db = require("mongoose");
const Model = require("./model");
const MONGOPASS = process.env.PASSWORD;

db.Promise = global.Promise;
db.connect(
  `mongodb+srv://jusart92:${MONGOPASS}@cluster0.anotp.mongodb.net/backendNode`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
console.log("[db] Connectada con éxito");

function addMessage(message) {
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage(filterUser) {
  let filter = {};
  if (filterUser !== null) {
    filter = { user: filterUser };
  }
  const messages = await Model.find(filter);
  return messages;
}

async function updateText(id, message) {
  const foundMessage = await Model.findOne({
    _id: id,
  });
  foundMessage.message = message;
  const newMessage = await foundMessage.save();
  return newMessage;
}

function removeMessage(id) {
  return Model.deleteOne({
    _id: id,
  });
}

module.exports = {
  add: addMessage,
  list: getMessage,
  updateText: updateText,
  remove: removeMessage,
};
