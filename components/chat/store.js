const Model = require("./model");

function addChat(chat) {
  const myChat = new Model(chat);
  return myChat.save();
}

function listChat(userId) {
  return new Promise((resolve, reject) => {
    let filter = {};
    if (userId) {
      filter = { users: userId };
    }
    Model.find(filter)
      .populate("users")
      .exec((error, populated) => {
        if (error) {
          reject(e);
        }
        resolve(populated);
      });
  });
}

module.exports = {
  add: addChat,
  list: listChat,
};
