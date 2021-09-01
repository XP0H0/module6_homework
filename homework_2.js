function checkNum(x){
let result = true;
   if (x == 1) {
     console.log("Число Х - является простым");
     return;
   }
   else if (x >= 1000){
     console.log("Неверные данные");
     return;
   }
   else if (x == 0){
   console.log("Вы ввели число - 0");
   return;
   }
   for (let i = 2; i < x; i++) {
	 if (x % i == 0) {
		result = false;
		break;
	 }
   }
   if (result == true){
     console.log ("Число Х - является простым")
   }
   else console.log ("Число Х - не является простым")
}
checkNum(0);
