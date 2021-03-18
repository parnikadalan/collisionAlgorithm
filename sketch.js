var fixedRect, movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 200, 50, 80);
  movingRect = createSprite(400, 200, 50, 50);
  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX
  movingRect.y = mouseY

if (movingRect.width/2+fixedRect.width/2>movingRect.x-fixedRect.x
  && movingRect.width/2+fixedRect.width/2>fixedRect.x-movingRect.x
  && movingRect.height/2+fixedRect.height/2>movingRect.y-fixedRect.y
  && movingRect.height/2+fixedRect.height/2>fixedRect.y-movingRect.y){
  fixedRect.shapeColor = "red"
  movingRect.shapeColor = "red"
}
else {
  fixedRect.shapeColor = "blue"
  movingRect.shapeColor = "blue"
}

  drawSprites();
}