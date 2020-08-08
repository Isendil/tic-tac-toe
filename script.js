function startGame() {
  for (i = 1; i <= 9; i++) {
    clearBox(i);
  }
  document.turn = "X";
  document.winner = null;
  setMessage(document.turn + " get to Start");
}

function setMessage(msg) {
  //document.getElementById("message").innerText = msg
  $("#message").text(msg);
}

function nextMove(square) {
  if (document.winner != null) {
    setMessage(document.turn + " already won");
  } else if (square.innerText === "") {
    square.innerText = document.turn;
    switchTurn();
  } else {
    setMessage("pick another box");
  }
}

function switchTurn() {
  if (checkForWinner(document.turn)) {
    setMessage("Congrats " + document.turn + " You won");
    document.winner = document.turn;
  } else if (document.turn == "X") {
    document.turn = "O";
    setMessage("it's " + document.turn + " turn");
  } else {
    document.turn = "X";
    setMessage("it's " + document.turn + " turn");
  }
}

function checkRow(a, b, c, move) {
  var result = false;
  if (getBox(a) == move && getBox(b) == move && getBox(c) == move) {
    result = true;
  }
  return result;
}

function checkForWinner(move) {
  var result = false;
  if (
    checkRow(1, 2, 3, move) ||
    checkRow(4, 5, 6, move) ||
    checkRow(7, 8, 9, move) ||
    checkRow(1, 5, 9, move) ||
    checkRow(7, 5, 3, move) ||
    checkRow(1, 4, 7, move) ||
    checkRow(2, 5, 8, move) ||
    checkRow(3, 6, 9, move)
  ) {
    result = true;
  }
  return result;
}

function getBox(number) {
  // return document.getElementById("s"+number).innerText;
  return $("#s" + number).text();
  // console.log(document.getElementById("s"+number).innerText);
  // console.log(number);
}

function clearBox(number) {
  // document.getElementById("s"+number).innerText = "";
  $("#s" + number).text("");
}
