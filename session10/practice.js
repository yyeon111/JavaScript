const diceTenTimes = {
  // ⭐️ 아래의 메서드를 갖는 것이 이터러블 프로토콜
  [Symbol.iterator] () {
    let count = 0;
    let maxCount = 10;
    
    // ⭐️ 이터레이터(next 메서드를 가진 객체)을 반환
    return {
      next () {
        return {
          value: Math.ceil(Math.random() * 6),
          done: count++ >= maxCount
        }
      }
    }
  }
}

// 💡 스프레드 문법 사용 가능
const diceResults = [...diceTenTimes];

console.log(diceResults);