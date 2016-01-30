function sumOfSquares(number){
  var sum = 0;
  for (x=1; x<=number; x++){
    sum += x * x;
  }
  return sum;
}

function squaresOfSums(number){
  var sum = 0;
  for (x=1; x<=number; x++){
    sum += x;
  }
  sum *= sum;
  return sum;
}
var sqr = squaresOfSums(100)-sumOfSquares(100);
console.log(sqr);
