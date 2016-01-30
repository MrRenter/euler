function isDivis(number){
  for (x=1; x<=20; x++){
    if ((number % x) !== 0){
      return false;
    }
  }
  return true;
}

running = true;

var j = 1;
while (running){
  if (isDivis(j)){
    running = false;
    console.log(j);
  }
  j++;
}
