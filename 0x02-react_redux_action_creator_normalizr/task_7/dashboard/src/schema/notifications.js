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
  Object.values(normalized.entities.notifications).forEach((dat) => {
    if (dat.author === userId) {
      contextList.push(normalized.entities.messages[dat.context]);
    }
  })
  return contextList;
}
