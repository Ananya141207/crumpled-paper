
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	,Paper;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	Paper = new paper (100,600,10);

	leftSide=new dustbin(550,620,20,100);
   bottomSide=new dustbin(610,660,100,20);
   rightSide=new dustbin(670,620,100);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 Engine.update(engine);

  groundObject.display();
  dustbinObj.display();
  Paper.display();

  drawSprites();

}
function keyPressed(){
if (keyCode ===UP_ARROW){Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});
}


}
