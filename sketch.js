const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground1,box1,box2,box3,paper1

function preload()
{
	boximage = loadImage('dustbingreen.png');
}

function setup() {
	
	
	var canvas = createCanvas(1366, 657);
	rectMode(CENTER);
	engine = Engine.create();
	world = engine.world;
	


	
	box1 = new dustbin(1100,610,150,15);
	box2 = new dustbin(1183,517,15,170);
	box3 = new dustbin(1015,517,15,170);
	
	ground1 = new ground(700,640,1400,30);
	
	paper1 = new paper(200,300);
	
	 Engine.run(engine);
  
}


function draw() {
	background(206,23,270);
	Engine.update(engine);
	fill("orange");
	textFont("algerian")
	textSize(70)
	text("Green India Clean India",250,100);
	textSize(50);
	fill("darkgreen")
	text ("Throw the paper into Dustbin By Press UP arrow",50,200)
	
	
	ground1.display();
	box3.display();
	box1.display();
	box2.display();
	image(boximage,1000,425,200,200);
	paper1.display();
	
 


}

	function keyPressed()	{
		if(keyCode===UP_ARROW)	{
			Matter.Body.applyForce(paper1.body,paper1.body.position,{x:195,y:-150});

		}

		
	}



