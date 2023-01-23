import { Map, fromJS } from 'immutable';

function getImmutableObject(object) {
  return fromJS(object);
}

export default getImmutableObject;
