
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

function preload()
{
	
}

var bob,paper;
var chain1,bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	bob=new BOB(300,350,300,20);
	paper = new Paper(105,370,52,PI/2);
	bob= new BOB(230,180,80,PI/2);
	

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  bob.display();
  paper.display();
  chain1.display();
  bob.display();

  drawSprites();
 
}



