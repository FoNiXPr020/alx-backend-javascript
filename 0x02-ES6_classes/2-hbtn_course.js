export default class HolbertonCourse {
  constructor(name, length, students) {
    this._validateAttributes({ name, length, students });
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    HolbertonCourse._checkString(name, 'Name');
    this._name = name;
  }

  get length() {
    return this._length;
  }

  set length(length) {
    HolbertonCourse._checkNumber(length, 'Length');
    this._length = length;
  }

  get students() {
    return this._students;
  }

  set students(students) {
    HolbertonCourse._checkArray(students, 'Students');
    students.forEach((student) => HolbertonCourse._checkString(student, 'Student'));
    this._students = students;
  }

  static _checkString(value, variableName) {
    if (typeof value !== 'string') {
      throw new TypeError(`${variableName} must be a string`);
    }
  }

  static _checkNumber(value, variableName) {
    if (typeof value !== 'number') {
      throw new TypeError(`${variableName} must be a number`);
    }
  }

  static _checkArray(value, variableName) {
    if (!Array.isArray(value)) {
      throw new TypeError(`${variableName} must be an array`);
    }
    if (!value.every((item) => typeof item === 'string')) {
      throw new TypeError(`${variableName} must be an array of strings`);
    }
  }

  _validateAttributes(attrs) {
    const validators = new Map([
      ['name', HolbertonCourse._checkString],
      ['length', HolbertonCourse._checkNumber],
      ['students', HolbertonCourse._checkArray],
    ]);

    for (const [key, value] of Object.entries(attrs)) {
      const validator = validators.get(key);
      if (validator) {
        validator(value, key.charAt(0).toUpperCase() + key.slice(1));
      }
    }

    if (!Array.isArray(attrs.students) || !attrs.students.every((student) => typeof student === 'string')) {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
