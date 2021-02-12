const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, ground, ball



function setup() {
  createCanvas(400,400);
 // createSprite(200, 200, 50, 50);
var object = {isStatic: true} 
myEngine = Engine.create()
myWorld = myEngine.world
ground = Bodies.rectangle(200,390,400,20,object)
World.add(myWorld,ground)
var circle = {restitution: 2.0}
ball = Bodies.circle(200,200,20,circle)
World.add(myWorld,ball)
  console.log(ground)



}

function draw() {
  background("black");
  Engine.update(myEngine) 
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,400,20);

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}