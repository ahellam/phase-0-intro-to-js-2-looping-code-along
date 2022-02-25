function writeCards(names, event){
  let arr = []
    for (let i = 0; i < names.length; i++) {
        arr.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      }
      return arr;
}

console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "suprise"));

function countDown(num){
    while (num >= 0){
        console.log(num);
        num --;
    }
}
console.log(countDown(11));