
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(918,268,30);
	mango3=new mango(1214,264,30);
	mango4=new mango(974,150,30);
	mango5=new mango(1004,220,30);
	mango6=new mango(1160,157,30);
	mango7=new mango(1088,245,30);


	stoneObj=new Stone(242,460,25);

	launcherObject=new Launcher(stoneObj.body,{x:241,y:460});

	treeObj=new tree(1050,610);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);
}

function draw() {

  background(230);

  //Add code for displaying text here!
  image(boy ,200,380,200,300);
  
  stoneObj.display();
  treeObj.display();
  launcherObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  groundObject.display();

  if(stoneObj.x> mango1.x-(stoneObj.width/2 + mango1.width/2) ||
  stoneObj.x<mango1.x+(stoneObj.width/2 + mango1.width/2) || 
  stoneObj.y> mango1.y-(stoneObj.height/2 + mango1.height/2) ||
  stoneObj.y<mango1.y+(stoneObj.height/2 + mango1.height/2)){
    mango1.repel();
}

if(stoneObj.x> mango2.x-(stoneObj.width/2 + mango2.width/2) ||
  stoneObj.x<mango2.x+(stoneObj.width/2 + mango2.width/2) || 
  stoneObj.y> mango2.y-(stoneObj.height/2 + mango2.height/2) ||
  stoneObj.y<mango2.y+(stoneObj.height/2 + mango2.height/2)){
    mango2.repel();
}

if(stoneObj.x> mango3.x-(stoneObj.width/2 + mango3.width/2) ||
  stoneObj.x<mango3.x+(stoneObj.width/2 + mango3.width/2) || 
  stoneObj.y> mango3.y-(stoneObj.height/2 + mango3.height/2) ||
  stoneObj.y<mango3.y+(stoneObj.height/2 + mango3.height/2)){
    mango3.repel();
}

if(stoneObj.x> mango4.x-(stoneObj.width/2 + mango4.width/2) ||
  stoneObj.x<mango4.x+(stoneObj.width/2 + mango4.width/2) || 
  stoneObj.y> mango4.y-(stoneObj.height/2 + mango4.height/2) ||
  stoneObj.y<mango4.y+(stoneObj.height/2 + mango4.height/2)){
    mango4.repel();
}

if(stoneObj.x> mango5.x-(stoneObj.width/2 + mango5.width/2) ||
  stoneObj.x<mango5.x+(stoneObj.width/2 + mango5.width/2) || 
  stoneObj.y> mango5.y-(stoneObj.height/2 + mango5.height/2) ||
  stoneObj.y<mango5.y+(stoneObj.height/2 + mango5.height/2)){
    mango5.repel();
}

if(stoneObj.x> mango6.x-(stoneObj.width/2 + mango6.width/2) ||
  stoneObj.x<mango6.x+(stoneObj.width/2 + mango6.width/2) || 
  stoneObj.y> mango6.y-(stoneObj.height/2 + mango6.height/2) ||
  stoneObj.y<mango6.y+(stoneObj.height/2 + mango6.height/2)){
    mango6.repel();
}
if(stoneObj.x> mango7.x-(stoneObj.width/2 + mango7.width/2) ||
  stoneObj.x<mango7.x+(stoneObj.width/2 + mango7.width/2) || 
  stoneObj.y> mango7.y-(stoneObj.height/2 + mango7.height/2) ||
  stoneObj.y<mango7.y+(stoneObj.height/2 + mango7.height/2)){
    mango7.repel();
}

}

function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    launcherObject.fly();
}
function keyPressed(){
if(keyCode=== 32){

  Matter.Body.setPosition(stoneObj.body, {x: 241 , y: 460});
  launcherObject.attach(stoneObj.body);
}

}



