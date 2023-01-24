import { fromJS } from "immutable";


export function getListObject(array) {
  return fromJS(array);
}

export function addElementToList(list, element) {
  list.push(element);
  return list;
}
