const obj = {
  x: 1,
  y: 2,
  toJSON () {
    return '직렬화 완료';
  }
};

console.log(JSON.stringify(obj));