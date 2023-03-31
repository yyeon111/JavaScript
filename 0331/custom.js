class MilitaryError extends Error {
  constructor (position, ...params) {
    super(...params);

    this.name = 'MilitaryError';

    switch (position) {
      case '이병':
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message += ' 엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나. ' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}
class Soldier {
  constructor (position) {
    this.position = position;
  }

  speak (word) {
    console.log(this.position + ':', word);
    try {
      if (!'다나까'.includes(word.at(-1))) {
        throw new MilitaryError(
          this.position,
          '군대에서 모든 말은 다나까로 끝낸다.'
        );
      }

    } catch (e) {
      console.error(e);
    }
  }
}
['이병', '일병', '상병', '병장'].forEach(pos => {
  const soldier = new Soldier(pos);
  soldier.speak('무슨 일입니까');
  soldier.speak('왜요');
});

console.log(Object.getOwnPropertyDescriptors(MilitaryError));