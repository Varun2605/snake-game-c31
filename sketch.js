let snake;
let rez = 20;
let food;
let w;
let h;
var timer = 0;
var gameState = "Play";

function setup() {
  createCanvas(400, 400);
  w = floor(width / rez);
  h = floor(height / rez);
  frameRate(10);
  snake = new Snake();
  foodLocation();

}

function draw() {

  scale(rez);
  background(255);
  if (snake.eat(food)) {
    foodLocation();
  }
  snake.update();
  snake.show();

  text("HI"+ timer, 200,200)
  
  if (snake.GameOver()) {
    print("GAME OVER");
    background(255, 0, 0);
    noLoop();
  }

  if(gameState === "Play" ){
    timer--;
  }

  noStroke();
  fill(255, 0, 0);
  rect(food.x, food.y, 1, 1);
}

function foodLocation() {
  let x = floor(random(w));
  let y = floor(random(h));
  food = createVector(x, y);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    snake.setPos(-1, 0);
  } else if (keyCode === RIGHT_ARROW) {
    snake.setPos(1, 0);
  } else if (keyCode === DOWN_ARROW) {
    snake.setPos(0, 1);
  } else if (keyCode === UP_ARROW) {
    snake.setPos(0, -1);
  } else if (key == ' ') {
    snake.grow();
  }

}