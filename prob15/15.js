var gridWidth = 20;
var gridHeight = 20;

var rowA = [];
var rowB = [];

for (x=0; x<=gridWidth; x++){
  rowA.push(1);
}

for (gridHeight; gridHeight>0; gridHeight--){

  rowB.push(1);

  for (x=1; x<=gridWidth; x++){
    rowB.push(rowA[x] + rowB[x-1]);
  }
  
  rowA = rowB;
  rowB = [];
}
console.log(rowA[rowA.length-1]);
