class Parent {
}

class Child extends Parent {
  static name = 'Child';
}

const error = new Child
error.name = '나만의 이름';
console.dir(error);
