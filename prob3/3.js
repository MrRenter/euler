var number = 600851475143;
var x=2;
for (x=x; x<number; x++){
  if ((number % x) == 0){
    number /= x;
    x--;
  }
}
console.log(x + " yay");
