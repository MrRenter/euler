function divisors(number){
  var x=2;
  var numofdivisors = 3;
  for (x=x; x<number; x++){
   if ((number % x) == 0){
     numofdivisors++;
     number /= x;
     x--;
   }
  }
  return numofdivisors;
}
var num = 280000;
var running = true;
while (running){
  if (divisors(num) >= 500){
    running = false;
  }
  num++
}
console.log(num);
