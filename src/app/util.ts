export class Util {
  constructor() {
  }

  calculate(a: number, b: number) {
    return a * b;
  }

  add(a: number, b: number) {
    return a + b;
  }

  displayMessage() {
    return 'Hello Me' //if you change to null/undefined will fail
  }

  isTrue() {
    return true;
  }

  toBeGreaterThan(value: number) {
    return value;
  }

  getUsers(){
    return [{name: 'John Doe', age: 12}, {name: 'Kim Kam', age: 10}];
  }
}
