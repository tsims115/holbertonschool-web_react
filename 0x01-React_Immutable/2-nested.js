export default function accessImmutableObject(object, array) {
  let value = object;
  for (let i = 0; i < array.length; i += 1) {
    value = value[array[i]];
  }
  return value;
}
