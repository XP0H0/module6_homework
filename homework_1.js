let arr = [1, 3, 3, 5, 6, 6, null, 0, "stroka", 4, "10"];
function checkNum() {
  let i = 0;
  let evenNum = 0;
  let oddNum = 0;
  while (i < arr.length) {
  if (arr[i] === null){
    console.log(`${i} элемент списка равен null`)
  }
  else if (arr[i] === 0){
    console.log(`${i} элемент списка равен 0`)
  }
  else if (typeof arr[i] != "number"){
    console.log(`${i} элемент списка не является числом`)
  }
  else if (arr[i] % 2 === 0){
    evenNum++
  }

  else oddNum++;
     i++
}
console.log(`В списке четных чисел: ${evenNum} и не четных: ${oddNum}`) };

checkNum();