var Trex;
function preload(){
  running_trex=loadAnimation("trex1.png","trex3.png","trex4.png")
}
function setup(){
  createCanvas(800,400);
Trex=createSprite(90,370,20,50);
Trex.addAnimation("running",running_trex)
Trex.scale=0.5;
}
function draw(){
background("pink");
drawSprites()
}