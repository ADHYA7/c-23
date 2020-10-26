const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground , engine , world,box,box1 
function setup() {
  createCanvas(800,400);
  engine = Engine.create()
  world = engine.world
  box = new Box(200,300,50,50)
  box1 = new Box(240,100,50,100)
  ground = new Ground(400,390,800,20)
  }

function draw() {
  background(255,255,255);  
  Engine.update(engine)
  box.display()
  box1.display()
  ground.display();
}