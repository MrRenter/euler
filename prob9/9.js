function findC (a, b) {
  var csqr = (a*a) + (b*b);
  var tc = Math.sqrt(csqr);
  return tc;
}

for (x=999; x>0; x--){
  for (y=998; y>0; y--){
    var c = findC(x, y);
    if ((x + y + c) === 1000){
      console.log(x*y*c);
    }
  }
}
