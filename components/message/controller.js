const store = require("./store");

function addMessage(chat, user, message, file) {
  return new Promise((resolve, reject) => {
    if ((!chat, !user || !message)) {
      console.error("[messageController] -> No hay usuario o controller");
      reject("Los datos son incorrectos");
    }

    let fileUrl = "";
    if (file) {
      fileUrl = `http://localhost:3000/app/files/${file.filename}`;
    }

    const fullMessage = {
      chat: chat,
      user: user,
      message: message,
      date: new Date(),
      file: fileUrl,
    };

    // console.log(fullMessage);

    store.add(fullMessage);

    resolve(fullMessage);
  });
}

function getMessage(filterUser) {
  return new Promise((resolve, reject) => {
    resolve(store.list(filterUser));
  });
}

function updateMessage(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    // console.log(id);
    // console.log(message);
    resolve(result);
  });
}

function deleteMessage(id) {
  return new Promise((resolve, reject) => {
    if (!id) {
      reject("Id invalido");
    }
    store
      .remove(id)
      .then(() => {
        resolve();
      })
      .catch((e) => {
        reject(e);
      });
  });
}

module.exports = {
  addMessage,
  getMessage,
  updateMessage,
  deleteMessage,
};
