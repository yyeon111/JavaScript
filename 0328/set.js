// Set 생성
const set1 = new Set([0, 1, 2, 3]);

// add 메서드 - 요소 추가
// set1.add(1);
// set1.add('A');
// set1.add(true);

console.log(set1); // Set

console.log(set1.has(false));

console.log(set1.delete(1));
console.log(set1);

const test = set1.add(4);
console.log(set1, test);
set1.add(5);
console.log(set1, test);

console.log(set1.size);
[
  set1.keys(), //키 의미없음
  set1.values(),
  set1.entries()
].forEach(i => console.log(i))

const type = set1.keys();
console.log(typeof type);

set1.clear();
console.log(set1);


const arr = [1, 2, 3, 4];
const copy = new Set(arr);
for(const item of copy) {
  console.log(item);
}

const spread = [...new Set(arr)];
console.log(spread);

const {a, ...rest} = spread;
console.log(a, rest);