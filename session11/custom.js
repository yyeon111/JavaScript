class MillitaryError extends Error {
  constructor (position, ...params) {
    super(...params);

    this.name = 'MillitaryError';

    switch (position) {
      case '이병': 
        this.message = '개판이군. 맞선임 데려와봐.';
        break;
      case '일병':
        this.message = '엎드려 뻗쳐.';
        break;
      case '상병':
        this.message = '짬을 거꾸로 먹었나.' + this.message;
        break;
      default:
        this.message = '집에 갈 때 됐다 이거지? ㅎㅎ';
    }
  }
}

const test = '무슨 일 입니까';
console.log('까'.includes(test.at(-1)));