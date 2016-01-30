var sum = 0;
for (x=1; x<1000; x++){
  if ((x % 3) == 0){
    sum += x;
    console.log(x + " is divis by 3");
  } else if ((x % 5) == 0){
    sum += x;
    console.log(x + " is divis by 5");
  }
}
console.log(sum + " is the sum");
