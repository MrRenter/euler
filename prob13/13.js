var fs = require("fs");
var buf = new Buffer(10056);
var theFile;
var number;
fs.open('numbers.txt', 'r+', function(err, fd){
  if (err){
    return console.error(err);
  }
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    theFile = buf.slice(0, bytes).toString();
    number = theFile.split("\n");
    locateFirstTen(number);
    fs.close(fd, function(err){
      if (err){
       console.log(err);
      }
    });
  });
});

function locateFirstTen(number){
  var sum = 0;
  for (x=0; x<number.length-1; x++){
    sum = sum + parseInt(number[x], 10)
  }
  var firstTen = sum.toString().split("");
  var word = "";
  for (i=0; i<11; i++){
    if (i == 1) {
      i++;
    }
    word += firstTen[i];
  }
  console.log(word);
}
