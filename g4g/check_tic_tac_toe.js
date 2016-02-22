function convertBoard(board){
  var numBoard = []
  var row = [];
  for (var i=0; i<board.length;i++){
    for (var j=0; j<board[0].length; j++){
      if (board[i][j]=='x')
        row.push(1);
      else 
        row.push(-1);
    }
    numBoard.push(row);
    row = [];
  }
  return numBoard;
}

function checkWinner(numBoard){
  var totalV, totalH = 0;
  
  // check hor and vert
  for (var i=0; i<numBoard.length; i++){
    for (var j=0; j<numBoard.length; j++){
      totalV += numBoard[i][j];
      totalH += numBoard[j][i];
    }

    if (totalV %3==0 || totalH %3 ==0)
        return true;
    else{
      totalV = 0;
      totalH =0;
    }
  }
  // check diagonals
  var totalDLeft, totalDRight =0;
  var rIndex = numBoard.length-1;
  for (var p=0; p<numBoard.length; p++){
    totalDLeft+=numBoard[p][p];
    totalDRight += numBoard[rIndex][rIndex];
    rIndex--;
  }

  if (totalDLeft%3==0 || totalDRight%3==0)
      return true;
  return false;
}

var board = [['x','o','x'],['o','x','o'],['o','o','x']];
var numBoard = convertBoard(board);
console.log(checkWinner(numBoard));
