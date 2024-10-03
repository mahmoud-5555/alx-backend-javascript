export default class HolbertonCourse {
  constructor(name, lenght, studans) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof lenght !== 'number') {
      throw new TypeError('Length must be a number');
    }
    if (!Array.isArray(studans)) {
      throw new TypeError('Students must be an array');
    }

    this._name = name;
    this._length = lenght;
    this._students = studans;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else throw new TypeError('Name must be a string');
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._length = newLength;
    } else throw new TypeError('Length must be a number');
  }

  set students(newStudents) {
    if (Array.isArray(newStudents)) {
      this._students = newStudents;
    } else throw new TypeError('Students must be an array');
    this._students = newStudents;
  }
}
