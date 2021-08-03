const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var compBase,playerBase,player,compPlayer;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  engine = Engine.create();
  world = engine.world;
	
   //Create Player Base and Computer Base Object
  compBase=new ComputerBase(200,random(450,height-300),180,150);
  playerBase=new PlayerBase(width-200,random(450,height-300),180,150);
  player=new Player(width-200,height-480,100,200);
  compPlayer=new ComputerPlayer(200,height-480,100,200);
 }

function draw() {

  background(180);

  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

   //Display Playerbase and computer base 
   compBase.display();
   playerBase.display(); 
   //display Player and computerplayer
  player.display();
  compPlayer.display();

}
