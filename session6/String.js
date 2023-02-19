//toUpperCase, toLowerCase
const word = 'Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
); //기존 문자열을 바꾸는 것이 아니라 반환만 하는 것.

function areSameWords (word1, word2) {
  return word1.toLowerCase() === word2.toLowerCase();
}
//대소문자가 들어오더라도 같은 값으로 반환하게 설정하기.

console.log(
  areSameWords('Hello', 'hello'),
  areSameWords('가나다', '가나다'),
  areSameWords('ABC', 'DEF')
);

//charAt, at
//인덱스의 문자 반환
console.log(
  'Hello World!'.charAt(0), //이것보다 []를 사용해서 별 쓸모없음
  '안녕하세요~'.charAt(2)
);
//앞, 뒤에 있는 인덱스를 가져 올 수 있다.
//앞에는 0부터 뒤에는 -1부터 시작
console.log(
  '안녕하세요~'.at(1),
  '안녕하세요~'.at(-1)
);

//indexOf, lastIndexOf
//인덱스를 반환한다.
//lastindex는 뒤에서 처음 나오는 인덱스 반환.
//없을 시 -1반환
const word1 = '반갑습니다!';
console.log (
  word1.indexOf('습'),
  word1.lastIndexOf('습')
);

const word2 = '아니, 하나마나한 걸 왜 하나?';
console.log (
  word2.indexOf('하나'), //4
  word2.lastIndexOf('하나') //14
);

//includes, startsWith, endsWith
//아무곳, 맨앞, 맨끝 여부 불리언으로 변환.
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for (const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']) {
  console.log(
    'includes', word, sentence.includes(word) //문장에.includes(이 단어가 포함되나)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word) //문장에.startsWith(이 단어로 시작하나)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word) //문장에. endsWith(이 단어로 끝나나)
  );
  console.log('- - - - -');
}

//serarch 정규식과 함께 쓰인다. 인덱스 반환 
//없으면 -1반환
console.log(
  '하루가 7번 지나면 1주일이 되는 거야.'.search(/[0-9]/), //문자 0-9까지 중 위치를 인덱스로 찾음 
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/) //없음. -1
);

//substring 전달받은 인덱스를 기준으로 잘라서 문자열로 반환.
//하나를 쓰면 그 인덱스포함 뒤까지 잘라가져옴
//두개를 쓰면 그 인덱스포함 그 인덱스 전까지 잘라옴 
const word3 = 'ABCDEFGHIJKL';

console.log(
  word3.substring(4)
);

const word4 = 'ABCDEFGHIJKL';
const part = word4.substring(4, 8)

console.log(word4, part);


console.log(
  // word4.substring(-1), //음수 전부가져옴
  // word4.substring(4, 100), //시작 인덱스부터 끝까지 가져옴
  word4.substring(100) //아무것도 안가져옴
);

const sentence1 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord = sentence1.substring(
  0, sentence.indexOf(' ')
);
const lastWord = sentence1.substring(
  sentence.lastIndexOf(' ') + 1, sentence1.length
);

console.log(firstWord, lastWord);

//slice substring과 같으나 음수로 뒤에서 부터 자를 수 있다.
const word5 = 'ABCDEFGHIJKL';
console.log(
  word5.substring(4, 8),
  word5.slice(4, 8),
);

console.log(
  word5.substring(-4), //음수는 전부 반환.
  word5.slice(-4) //음수는 뒤에서부터-1부터 세서 반환.
);

const sentence2 = '옛날에 호랑이 한 마리가 살았어요.';

const firstWord2 = sentence2.slice(
  0, sentence2.indexOf(' ')
);

const lastWord2 = sentence2.slice(
  sentence2.lastIndexOf(' ') + 1 - sentence2.length
);//시작은 포함 끝은 전까지이 때문에 +1을 해준다.

console.log(firstWord2, lastWord2);

//split 문자열이나 정규표현식으로 분리하여 배열을 반환.
console.log(
  '010-1234-5678'.split('-'),
  'ABC1DEF2GHI3JKL'.split(/[0-9]/)
)
// 인자로 빈 문자열을 넣거나 인자 생략시
const word6 = '안녕하세요';

console.log(
  word6.split(''),
  word6.split()//생략하면 통으로 배열에 들어감.
)

const word7 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';

console.log(
  word7.split(' ', 2), //두번째 인자에 배열의 길이를 지정 해 줄 수 있다.
  word7.split(' ', 4)
)

//trim, trimStart, trimEnd
//앞 뒤 공백 제거하며 반환. 중간 공백은 제거하지 않음.
const word8 = '  Hello World!  ';
console.log(`--${word8}--`);
console.log(`--${word8.trim()}--`); //앞 뒤 공백 제거
console.log(`--${word8.trimStart()}--`); //앞 공백 제거
console.log(`--${word8.trimEnd()}--`); //뒤 공백 제거

//repeat 어떤 문자열을 주어진 인자만큼 반복
const word9 = '호이';

console.log(word9.repeat(3));
console.log(word9.repeat(0));
console.log(word9.repeat()); //빈 문자열이면 빈 문자열 반환
// console.log(word9.repeat(-1)); //음수면 오류 발생

//replace 문자열이나 정규표현식을 치환한다.
//replaceAll 중복된 값 전부 치환한다.
const word10 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';

console.log(word10.replace('밥', '라면')); //맨 앞에 있는 문자만 치환한다.
console.log(word10.replace(/밥/g, '라면')); //replace임에도 불구하고 정규표현식을 사용하면 중복 된 값 모두 치환 할 수 있다.
console.log(word10.replaceAll('밥', '라면'));
console.log(word10.replaceAll(/밥/g, '라면')); //replace에서 정규표현식 쓰는거랑 같은것임. 

//메서드를 연속적으로 붙어서 사용하는 것을 메서드 체이닝 이라고 한다.

const test = '안녕 하세요';
console.log(test.search('하'));
