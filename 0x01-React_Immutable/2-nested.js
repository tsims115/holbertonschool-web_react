import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  const mapItem = fromJS(object);
  return mapItem.getIn(array, undefined);
}
