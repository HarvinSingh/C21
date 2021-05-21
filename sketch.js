var fixedRect, movingRect;
var gameobject1;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 600, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(100,100,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  gameobject1 = createSprite(100,100,50,50);
  gameobject1.shapeColor = "green";
  gameobject2 = createSprite(400,100,50,50);
  gameobject2.shapeColor = "green";
  gameobject2.velocityY = 5;
  
  fixedRect.velocityY = -5;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  if ( isTouching(gameobject1,movingRect)){
    movingRect.shapeColor = "red";
    gameobject1.shapeColor = "red";   
} 
else{
  movingRect.shapeColor = "green";
  gameobject1.shapeColor = "green";
}

bounceOff(gameobject2,fixedRect);

  drawSprites();
}
