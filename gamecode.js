var mapWidth = 20;
var mapHeight = 20;

var playerX = 4;
var playerY = 4;

var playerHealth = 37;
var maxHealth = 100;

var gameAreaWidth = 0;
var gameAreaHeight = 0;
var sqaureWidth = 0;
var sqaureHeight = 0;

var map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];

var keys = []

var gameCode = 0;
var ctx = 0;
var c=0;

function gameInit() {
  c = document.getElementById("gameArea");
  gameCode = document.getElementById("gameCodeArea");
  ctx = c.getContext("2d");
  gameAreaWidth = c.width;
  gameAreaHeight = c.height;
  sqaureWidth = gameAreaWidth / mapWidth;
  sqaureHeight = gameAreaHeight / mapHeight;
  setInterval(gameLoop, 10);
}

function gameLoop() {
  ctx.clearRect(0, 0, c.width, c.height);
  for (var i=0;i<mapHeight;i++) {
    for (var j=0;j<mapWidth;j++) {
      if (map[i][j] == 1) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.rect(j * sqaureWidth, i * sqaureHeight, sqaureWidth, sqaureHeight);
        ctx.fill();
      }
    }
  }
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.rect(playerX * sqaureWidth, playerY * sqaureHeight, sqaureWidth, sqaureHeight);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "red";
  ctx.rect(300, 0, (100 / maxHealth) * playerHealth, 20);
  ctx.fill();
  ctx.beginPath()
  ctx.lineWidth = "4";
  ctx.strokeStyle = "black";
  ctx.rect(300, 0, 100, 20);
  ctx.stroke()
  
}

function runCode() {
  eval(gameCode.value);
}

function moveRight() {
  playerX+=1;
  if (map[playerY][playerX] == 1) {
    playerX-=1;
  }
}
function moveLeft() {
  playerX-=1;
  if (map[playerY][playerX] == 1) {
    playerX+=1;
  }
}
function moveDown() {
  playerY+=1;
  if (map[playerY][playerX] == 1) {
    playerY-=1;
  }
}
function moveUp() {
  playerY-=1;
  if (map[playerY][playerX] == 1) {
    playerY+=1;
  }
}
