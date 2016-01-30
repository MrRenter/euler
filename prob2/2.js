var a = 1;
var b = 1;
var c = a + b;
var sum = 0;
while (c<4000000){
  if ((c % 2) == 0){
    sum += c;
  }
  a = b;
  b = c;
  c = a + b;
}
console.log(sum + " is the sum");
