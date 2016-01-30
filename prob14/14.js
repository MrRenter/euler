function even(number){
  return number/2;
}

function odd(number){
  return (3 * number) + 1;
}

function getChain(number){
  var chain = 1;
  while (number > 1){
    if ((number % 2) == 0){
      number = even(number);
    } else {
      number = odd(number);
    }
    chain++;
  }
  return chain;
}
var largestChain = 0;
var bestNumber = 0;
for (x=1; x<1000000; x++){
  var current = getChain(x);
  if (current > largestChain){
    bestNumber = x;
    largestChain = current;
  }
}
console.log(bestNumber);
