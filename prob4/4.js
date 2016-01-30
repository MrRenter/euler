function isPalindromic(num){
  var number = num.toString();
  revNumber = reverse(number);
  for (x=0; x<revNumber.length; x++){
    if (number.charAt(x) !== revNumber.charAt(x)){
      return false;
    }
  }
  return true;
}
function reverse(number){
  return number.split('').reverse().join("");
}

var largest = 0;
for (j=999; j>99; j--){
  for (k=999; k>99; k--){
    var xandy = j * k;
    if (isPalindromic(xandy)){
      if (xandy > largest){
        largest = xandy;
      }
    }
  }
}

console.log(largest);
