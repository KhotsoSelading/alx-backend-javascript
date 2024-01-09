export default function createInt8TypedArray(length, position, value) {
  if (position >= length) throw Error('Position outside range');

  const arrBuffer = new ArrayBuffer(length);
  const dView = new DataView(arrBuffer);

  dView.setInt8(position, value);

  return dView;
}
