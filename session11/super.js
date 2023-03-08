//첫번째 인자, 두번째 인자가 무엇이 들어오는지 검사
class MilitaryError extends Error {
  //변동 안되는 것
  constructor (position, ...params) {
    //바뀔 것들
    //단독으로 this를 가질 수 없다.
    super (...params) //Error에 전달 하는 것 message property
    //Error에서 super시 가져와서 쓰는 것이 아니라, 전달하고 가져오는 것. 
    // this.name = 'MilitaryError'; 
    //super을 했기 때문에 가능
    //부모의 메세지도 나의 메세지로서 사용 가능
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

//throw는 cath로 전달
//throw는 생성자만 가능 