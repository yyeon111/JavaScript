function main (name, no) {
  return {
    name, no,
    introduce(hi){
      return `안녕하세요 ${no}호점 ${name}입니다. ${hi}`;
    }
  }
}

const chain1 = main('올리브영',1);
console.log(chain1);

console.log(chain1.introduce('반갑습니다.'));