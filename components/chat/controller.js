const store = require("./store");

function listChat(userId) {
  return store.list(userId);
}

function addChat(users) {
  if (!users || !Array.isArray(users)) {
    return Promise.reject("Indivalid user list");
  }
  const chat = {
    users: users,
  };
  return store.add(chat);
}

module.exports = {
  listChat,
  addChat,
};
