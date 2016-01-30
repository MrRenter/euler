var gridWidth = 2;
var gridHeight = 2;
var totalSolves = 0;

function move(x, y, z){
  z++;
  if (x == gridWidth && y == gridHeight){
    totalSolves++;
    return;
  }
  if (x < gridWidth){
    console.log("right - " + z);
    move(++x, y, z);
  }
  if (y< gridHeight){
    console.log("down - " + z);
    move(x, ++y,z);
  }
}

move(0,0,0);
console.log("AND:");
console.log(totalSolves);
