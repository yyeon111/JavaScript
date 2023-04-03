function func1 () {
  const word = 'Hello';

  function func2 () {
    console.log(word);
  }
  
  return func2;
}

const logHello = func1();

logHello();

function createCounter (start) {
  let num = start;

  return function () {
    console.log(++start);
    return start;
  }
}

const count = createCounter(10);
count(); // ⭐ 반복 실행해 볼 것
count(); // ⭐ 반복 실행해 볼 것
count(); // ⭐ 반복 실행해 볼 것

function test (start) {
  console.log(++start);
  return start;
}

const start = test(10);
test(10);

function employeeCreator (name, age) {
  let _name = name;
  let _age = age;

  return {
    name: () => _name,
    age: () => _age,
    setAge: function (age) { _age = age; },
    getOlder: function (years) { _age += years; }
  }
}

const employee = employeeCreator('홍길동', 20);

console.log(employee);
console.log(employee.name(), employee.age());

employee.setAge(25);
console.log(employee.name(), employee.age());

employee.getOlder(3);
console.log(employee.name(), employee.age());

let _name= '';
const obj = {
  _name: name,
  name: () => this._name,
  age: () => age
};

console.log(obj.name('홍길동'));

