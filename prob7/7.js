function isPrime(number){
  for(x=2; x<number; x++){
    if ((number % x) == 0){
      if (number !== x){
        return false;
      }
    }
  }
  return true;
}

var numOfPrimes = 2;
var i = 3;
while (numOfPrimes != 10001){
  i++;
  if (isPrime(i)){
    numOfPrimes++;
  }
}
console.log(i);
