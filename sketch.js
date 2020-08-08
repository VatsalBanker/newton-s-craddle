
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	roof = new Ground(width/2, height/4, width/3, 20)
	bobDiameter = 40; 
	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	Rope1=new Rope(bobObject1.body,roof.body,-bobDiameter*2, 0)
	Rope2=new Rope(bobObject2.body,roof.body,-bobDiameter*1, 0)
	Rope3=new Rope(bobObject3.body,roof.body,0, 0)
	Rope4=new Rope(bobObject4.body,roof.body,bobDiameter*1, 0)
	Rope5=new Rope(bobObject5.body,roof.body,bobDiameter*2, 0)
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  roof.display();
  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x: -50, y: -45});
	 }
   }

