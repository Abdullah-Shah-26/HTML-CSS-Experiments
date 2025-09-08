let currentPlayer = "X";
let arr = Array(9).fill(null);

let gameOver = false;
function checkWinner() {
  const statusDiv = document.getElementById("status");
  if (
    (arr[0] != null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] != null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] != null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] != null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] != null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] != null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] != null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    statusDiv.textContent = `Winner is ${currentPlayer}`;
    gameOver = true;
    return true;
  }
  if (!arr.some((e) => e === null)) {
    statusDiv.textContent = "Draw!!";
    gameOver = true;
    return true;
  }
  return false;
}

function handleClick(el) {
  if (gameOver) return;
  const id = Number(el.id) - 1;
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.textContent = arr[id];
  if (!checkWinner()) {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
  console.log(arr);
}
