import { List, Map } from 'immutable';

export function concatElements(page1, page2) {
  let list = List(page1);
  list = list.concat(List(page2));
  return list;
}

export function mergeElements(page1, page2) {
  return Map(page1).merge(Map(page2));
}
