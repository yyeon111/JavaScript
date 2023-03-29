function* genFunc1 (){
  yield 'genFunc1';
}

const result = genFunc1();

console.log(result.next());

const genFunc2 = function* () {
  yield 'genFunc2';
}

const result2 = genFunc2();
console.log(result2.next());

const obj = {
  * genFunc3() {
    yield 'genFunc3';
  }
}

const result3 = obj.genFunc3();
console.log(result3.next());

class MyClass {
  * genFunc4 () {
    yield 'genFunc4';
  }
}

const result4 = new MyClass();
console.log(result4.genFunc4().next());