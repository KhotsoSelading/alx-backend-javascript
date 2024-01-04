export default class HolbertonCourse {
  constructor(name, length, students) {
    // HolbertonCourse class attributes
    this.name = name;
    this.length = length;
    this.students = students;
  }

  // get and set method for name
  get name() {
    return this._name;
  }

  set name(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = value;
  }

  // get and set method for length
  get length() {
    return this._length;
  }

  set length(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Length must be a number');
    }
    this._length = value;
  }

  // get and set methods for students
  get students() {
    return this._students;
  }

  set students(value) {
    if (!(Array.isArray(value) || !value.every((students) => typeof students === 'string'))) {
      throw new TypeError('Students must be an array of strings');
    }
    this._students = value;
  }
}
