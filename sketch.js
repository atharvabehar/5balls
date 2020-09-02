
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof,b1,b2,b3,b4,b5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	roof = new Roof(400,200,300,10)
	b1 = new Bob(300,400,50);
	b2 = new Bob(350,400,50);
	b3 = new Bob(400,400,50);
	b4 = new Bob(450,400,50);
	b5 = new Bob(500,400,50);

	rope1=new Rope(b1.body,roof.body,-50*2 ,0)
	rope2=new Rope(b2.body,roof.body,-50*1,0)
	rope3=new Rope(b3.body,roof.body,0, 0)
	rope4=new Rope(b4.body,roof.body,50*1, 0)
	rope5=new Rope(b5.body,roof.body,50*2, 0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
//  background("white");

  roof.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(b1.body,b1.body.position,{x:-50,y:-45});

	}
}


