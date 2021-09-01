function firstNum(x){
  return function(y) {
    return x + y
  }
}
let sum = firstNum(3);
console.log(sum(5))
