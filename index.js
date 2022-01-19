const arr1 =[]
function writeCards(names, event){
  let arr2 = [...arr1];
    for (let i = 0; i < names.length; i++) {
        arr2.push (`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
        // debugger;
      }
      return arr2;
}

writeCards(["Guadalupe", "Ollie", "Aki"], "suprise");

function countDown(num){
    let number = num;
    while (number >= 0){
        console.log(number);
        number --;
    }
}
