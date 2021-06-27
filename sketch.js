function preload() {
  //load game assets
  
 
}


function setup() {
  createCanvas(900,600);
  bunny=createSprite(100,500,50,80)
  carrot=createSprite(860,50,30,50)
  obs1=createSprite(450,200,150,30)
  obs2=createSprite(700,200,150,30)
  obs3=createSprite(800,300,150,30)
  obs4=createSprite(100,300,150,30)
  edges=createEdgeSprites()
  obs1.velocityX=5
  obs2.velocityX=-5
  obs3.velocityX=5
  obs4.velocityX=-5
 bunny.shapeColor="pink"
 carrot.shapeColor="orange"
 obs1.shapeColor=obs2.shapeColor="black"
obs3.shapeColor=obs4.shapeColor="blue"
}

function draw() {
  background("white");
  
  if(keyDown("up")){
    bunny.y+=-5
  }
  if(keyDown("down")){
    bunny.y+=5
  }
  if(keyDown("left")){
    bunny.x+=-5
  }
  if(keyDown("right")){
    bunny.x+=5
  }

  for(i=0;i<4;i++){
   obs1.bounceOff(edges[i])
   obs2.bounceOff(edges[i])
   obs3.bounceOff(edges[i])
   obs4.bounceOff(edges[i])
   bunny.bounceOff(edges[i])
  }
  if(obs1.isTouching(obs2)){
    obs1.velocityX*=-1
    obs2.velocityX*=-1
  }
  if(obs3.isTouching(obs4)){
    obs3.velocityX*=-1
    obs4.velocityX*=-1
  }
  if(bunny.isTouching(obs1) || bunny.isTouching(obs2) || bunny.isTouching(obs3) || bunny.isTouching(obs4)){
    bunny.x=100
    bunny.y=500
  }
  
  drawSprites()
  if(bunny.isTouching(carrot)){
    textSize(80)
    fill("violet")
    text("You won",300,300)
  }
}
