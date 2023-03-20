const obj = {
  key: 'Object',
  name: '오브젝트'
};

function change (object, key, value) {
  object.key = value;
}

const test = change(obj, 'price', 30);

console.log(test);