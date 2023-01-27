const data = require('../../notifications.json');

export function getAllNotificationsByUser(userId) {
  const contextList = [];
  data.forEach((dat) => {
    if (dat.author.id === userId) {
      contextList.push(dat.context);
    }
  })
  return contextList;
}
