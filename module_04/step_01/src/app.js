// the doulbe curly bracket is called the object literal syntax
// objectName.methodName()
// objectName.key

const obj = {
  sayHi() {
    console.log('hi');
  }
}

obj.sayHi();

const blue= '#00f';
const orange= '#f60';

const colors = {
  yellow: '#ff0',
  blue,
  orange
}

console.log(colors);
console.log(colors.yellow);
