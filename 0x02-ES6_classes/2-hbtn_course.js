/* eslint-disable no-unused-vars */

class HolbertonCourse {
  constructor(name, length, students) {
    // Initializes the c;ass attributes
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // Get methods
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // set methods
  set name(value) {
    if (typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = value;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = value;
  }

  set students(value) {
    if (!Array.isArray(value) || !value.every((student) => typeof student === 'string')) {
      throw new Error('Students must be an array of strings');
    }
    this._students = value;
  }
}
