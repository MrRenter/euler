function isPrime(num){
  for (x=2; x<num; x++){
    if ((num % x) == 0){
      return false;
    }
  }
  return true;
}

var below = 2000000;
var sum = 0;
for (y=2; y<below; y++){
  if (isPrime(y)){
    sum+=y;
  }
}
console.log(sum);
