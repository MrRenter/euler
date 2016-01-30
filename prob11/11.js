var fs = require("fs");
var buf = new Buffer(2048);
var theFile;
var width;
var height;
fs.open('numbers.txt', 'r+', function(err, fd){
  if (err){
    return console.error(err);
  }
  fs.read(fd, buf, 0, buf.length, 0, function(err, bytes){
    if (err){
      console.log(err);
    }
    theFile = buf.slice(0, bytes).toString();
    width = theFile.split("\n").length;
    height = theFile.split("\n")[0].split(" ").length;
    check();
    fs.close(fd, function(err){
      if (err){
        console.log(err);
      }
    });
  });
});

function get(x, y){
  var rows = theFile.split("\n");
  return rows[x].split(" ")[y];
}

function check(){
  var max = 0;
  for (x=0; x<width; x++){
    for (y=0; y<height-3; y++){
      var sum = get(x,y) * get(x,y+1) * get(x,y+2) * get(x,y+3);
      if (sum > max){
        max = sum;
      }
    }
  }

  for (y=0; y<height; y++){
    for (x=0; x<width-3; x++){
      var sum = get(x,y) * get(x,y+1) * get(x,y+2) * get(x,y+3);
      if (sum > max){
        max = sum;
      }
    }
  }

  for (x=0; x<width-3; x++){
    for (y=0; y<height-3; y++){
      var sum = get(x,y) * get(x+1,y+1) * get(x+2,y+2) * get(x+3,y+3);
      if (sum > max){
        max = sum;
      }
    }
  }

  for (x=19; x>2; x--){
    for (y=0; y<height-3; y++){
      var sum = get(x,y) * get(x-1,y+1) * get(x-2,y+2) * get(x-3,y+3);
      if (sum > max){
        max = sum;
      }
    }
  }
  console.log("max: " + max);
}
