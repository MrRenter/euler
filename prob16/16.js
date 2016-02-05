var bigInt = require("big-integer");

var num = bigInt(2).pow(1000);
var total = 0;

while (num > 0){
  total += num.mod(10);
  num = num.divide(10);
}

console.log(total);
