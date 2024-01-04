export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateAndSet('name', name, 'string');
    this._validateAndSet('length', length, 'number');
    this._validateAndSet('students', students, 'array');
  }

  //get methods
  get name() {
    return this._name;
  }

  set name(value) {
    this._validateAndSet('name', value, 'string');
  }

  get length() {
    return this._length;
  }

  set length(value) {
    this._validateAndSet('length', value, 'number');
  }

  //set methods
  get students() {
    return this._students;
  }

  set students(value) {
    this._validateAndSet('students', value, 'array');
  }

  _validateAndSet(attribute, value, type) {
    if (typeof value !== 'string') {
      throw new TypeError(`${attribute} must be a ${type}`);
    } else {
      this[`_${attribute}`] = value;
    }
  }
}
