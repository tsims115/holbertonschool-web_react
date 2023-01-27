const data = require('../../notifications.json');
import { schema, normalize } from 'normalizr';

const user = new schema.Entity('users');

const message = new schema.Entity('messages',
{},
{
  idAttribute: 'guid',
});

const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});

export const normalized = normalize(data, [notification]);
export function getAllNotificationsByUser(userId) {
  const contextList = [];
  data.forEach((dat) => {
    if (dat.author.id === userId) {
      contextList.push(dat.context);
    }
  })
  return contextList;
}

