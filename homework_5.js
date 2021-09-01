const pow = (x, n) => {
  let result = x;
  for (let i = 1; i < n; i++){
    result *= x;
  }
  return result;
}
let x = prompt("Введите число х:", '');
let n = prompt("В какую степень нужно возмести число х:", '');
if (n < 1) {
  alert(`Степень ${n} не поддерживается, используйте натуральное число`);
} else 
  alert( pow(x, n) );