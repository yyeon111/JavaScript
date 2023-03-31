function connect () {console.log(`🤩 Connect!`);}
function discconect () {console.log(`🤗 Disconnect!`);}
function sendArray (arr) {console.log(`😎 Send!`, arr);}

function sendStringAsArray(str) {
  connect();
  try {
    sendArray(str.split(''));
    return true;
  } catch (e) {
    console.error('❗Check this Error', e);
    return false;
  } finally {
    discconect();
  }

}

// sendStringAsArray('ABC') ? '[성공]' : '[실패]';
['ABC', '가나다', 123, '123'].forEach(i => console.log(sendStringAsArray(i) ? '[성공]' : '[실패]'))