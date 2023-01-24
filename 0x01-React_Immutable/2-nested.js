import { Map } from 'immutable';
export default function accessImmutableObject(object, array) {
  const mapItem = Map(object);
  return mapItem.getIn(array, undefined);
}
