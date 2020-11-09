var fixedRect;
var movingRect;

function setup() {
  createCanvas(400,400);
  fixedRect = createSprite(200, 200, 50, 50);
  movingRect = createSprite(300,300,80,40);
}

function draw() {
  background("black");  
  
  movingRect.x=World.mouseX;
  movingRect.y = World.mouseY;
  console.log(movingRect.x-fixedRect.x);

  // when both the rectangles are touching, color changes 
  //from green to red
  // check for all sides, one by one

  if(movingRect.x-fixedRect.x<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.x - movingRect.x<fixedRect.width/2+movingRect.width/2 &&
    movingRect.y-fixedRect.y<fixedRect.width/2+movingRect.width/2 &&
    fixedRect.y - movingRect.y<fixedRect.width/2+movingRect.width/2){
      movingRect.shapeColor="red";
      fixedRect.shapeColor="red";
    }else{
      movingRect.shapeColor="green";
      fixedRect.shapeColor="green";
    }

  
  drawSprites();
}