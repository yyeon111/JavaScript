const arr = ['ABC', '가나다', 123, '123'];

function getLetterArray (str) {
  try {
    return str.split('');
  } catch (e) {
    console.error('❗에러발생', e)
    console.log('e: '+ e);
    console.log('e message' + e.message);
    console.log('e stack:' + e.stack);
    console.dir(e);
    return [];
  }
}

arr.forEach(i => console.log(getLetterArray(i)));