console.log(new Date(Date.now()).toString());
console.log(new Date(new Date().getTime()).toString());
new Date(2023, 1, 1, 0, 0, 0, 0);
Date(); // type: string
Date.parse('Jun 1, 2023 00:00:00');
Date.parse('Jun 1, 2023 00:00:00 UTC') //+9시간
Date.parse('Jun 1, 2023 09:00:00')