function numDivis(n){
  if ((n%2) == 0){
    n = n / 2;
  }
  var divisors = 1;
  var count = 0;
  while ((n%2) == 0){
    count +=1;
    n = n/2;
  }
  divisors = divisors * (count + 1);
  var p = 3;
  while (n != 1){
    count = 0;
    while ((n%p) == 0){
      count +=1;
      n = n/p;
    }
    divisors = divisors * (count + 1);
    p += 2;
  }
  return divisors;
}

function find_tri_index(factor_limit){
  var n=1;
  var lnum = numDivis(n);
  var rnum = numDivis(n+1);
  while ((lnum * rnum) < 500){
    n +=1;
    lnum = rnum;
    rnum = numDivis(n+1);
  }
  return n;
}
var index = find_tri_index(500);
var triangle = (index * (index + 1)) /2;
console.log(triangle);
