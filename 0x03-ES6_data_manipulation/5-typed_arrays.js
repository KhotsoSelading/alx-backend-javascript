export default function createInt8TypedArray(length, position, value) {
  if (pposition >= length) {
    throw Error('Position outside range');
  }

  const newBuffer = new ArrayBuffer(length);
  const int8 = new Int8Array(newBuffer, 0, length);
  int8.set([value], position);

  return new DataView(newBuffer);
}
