//문자열 메서드는 기존 문자열이 바뀌지 않는다. = 원시형
//toUpperCase

const word ='Hello, World.';
console.log(
  word.toUpperCase(),
  word.toLowerCase()
);

console.log(word);

//charAt, at 인덱스 받아서 문자열 알려줌.
console.log(
  'Hello World'.charAt(0),
  '안녕하세요'.charAt(2)
);

console.log(
  '안녕하세요'.at(1),
  '안녕하세요'.at(-1) // 뒤에서부터는 -1로 counting
);

//indexOf, lastIndex
//문자열을 받아 인덱스를 반환. 없으면 -1 반환
const word1 = '반갑습니다';
console.log(
  word1.indexOf('습'),
  word1.lastIndexOf('습')
);

const word2 = '아니, 하나마나한 걸 왜 하나?';
console.log(
  word2.indexOf('하나'), //단어 일 경우 시작 index
  word2.lastIndexOf('하나') //뒤에서 부터 카운팅 하지만 앞에서 부터 인덱스 번호를 알려줌
);

//includes, startWith, endWith 포함, 시작, 끝 true false로 반환
//어디에 인자가 포함이 되었는지
const sentence = '옛날에 호랑이 한 마리가 살았어요.';

for(const word of ['옛날에', '호랑이', '살았어요.', '나무꾼']){
  console.log(
    'includes', word, sentence.includes(word)
  );
  console.log(
    'startsWith', word, sentence.startsWith(word)
  );
  console.log(
    'endsWith', word, sentence.endsWith(word)
  );
  console.log('----------------------------------');
}

//search 정규 표현식과 쓰임, 인덱스 반환, 없을 시 -1
console.log(
  '하루가 7번 지나면 1주일이 되는거야.'.search(/[0-9]/), // /은 문자열 표시 [범위]
  '하루가 일곱 번 지나면 일주일이 되는 거야.'.search(/[0-9]/)
);

//substring 어디서부터 어디까지 잘라서 가져옴
const word3 = 'ABCDEFTHIJKL';
const part = word3.substring(4,8) // 첫번째 인자 포함 두번째 인자 전 까지

console.log(word3, part); // 원시값이기 때문에 원본 변화 없음

const word4 = 'ABCDEFTHIJKL';
console.log(
  word4.substring(4) //하나만 주어질 경우 시작 부터 끝까지 가져옴
);

console.log(
  word4.substring(-1), // 0 이전부터 이기 때문에 전체 다 가져옴
  word4.substring(4,100), //4부터 마지막 까지 가져옴
  word4.substring(100), //가져올 것 없음 그냥 빈 칸 가져옴
  word4.substring() //가져올 것 없음 그냥 빈 칸 가져옴
);

//slice substring이랑 같은데 음수로 설정해서 뒤에서 부터 자를 수 있다. //배열 확인 필요
const test = 'ABCDEFTHIJKL';
console.log(
  test.substring(4,8),
  test.slice(4,8)
);

console.log(
  test.substring(-4), //0부터 이기 때문에 전부
  test.slice(-4) //뒤에서 -4시작부터 가져옴
);

//문자열이나 정규표현식을 기준으로 나눠서 배열로 반환.
//split
console.log(
  '010-1234-5678'.split('-'),
  'A1B2DC3D'.split(/[A-Z]/g) //반환할 게 없으면 빈 칸으로 채워서 배열 반환
);
//배열 몇 칸으로 가져올지 지정 할 수 있다.
const test1 = '하나 하면 할머니가 지팡이 짚고서 잘잘잘';
console.log(
  test1.split(' ', 2),
  test1.split(' ', 4)
);

//trim, trimStar, trimEnd 
//문자열 공백을 제거하고 반환. 앞쪽 공백, 뒤쪽 공백만 제거 가능
const test3 = ' Hello World! ';
console.log(`--${test3}--`);
console.log(`--${test3.trim()}`);
console.log(`--${test3.trimStart()}--`);
console.log(`--${test3.trimEnd()}--`);

//repeat 어떤 문자열을 인자만큼 반복 해서 반환
const test4 = '호이';

console.log(test4.repeat(3));
console.log(test4.repeat(0));
console.log(test4.repeat()); // 가져올 것 없으면 그냥 빈칸 반환

// console.log(test4.repeat(-1)); 잘못 된 수 오류 반환 실행 안됨

//replace, replaceAll
//어떤 문자열을 어떤걸로 대체하다.
console.log(
  '이스탄불은 터키의 수도이다.'.replace('터키','튀르키예')
);


///replace도 정규표현식 g를 사용하면 replaceAll과 같은 역할을 한다.
//replaceAll사용 시 굳이 g를 사용하지 않아도 알아서 인식한다.

const test5 = '밥 좀 먹자, 밥. 응? 야, 밥 좀 먹자고 밥, 밥!';
console.log(test5.replace('밥','라면'));
console.log(test5.replace(/밥/g, '라면'));

console.log(test5.replaceAll('밥','라면'));
console.log(test5.replaceAll(/밥/g, '라면'));