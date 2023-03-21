const obj = {
  key: 'Object',
  name: '오브젝트'
};

function change (object, key, value) {
  object.key = value;
}

const test = change(obj, 'price', 30);

console.log(test);

// const arrow () =>{}
// const arrow1 = () => {}
// const obj1 = {
//   introdunce(){

//   }
// }

// function a(){}
// const name = function(){};
// const age = () => {};
// name(){};
// ()=>{}

