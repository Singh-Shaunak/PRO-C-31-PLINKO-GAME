
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var particles = [];
var plinkos = [];





function setup() {
	createCanvas(600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
		 ground = new Ground(400,690,800,20);
		 division1 = new Division(100,530,10,300);
		 division2 = new Division(200,530,10,300);
		 division3 = new Division(300,530,10,300);
		 division4 = new Division(400,530,10,300);
		 division5 = new Division(500,530,10,300);
		 
		 for (var j = 75; j <=width; j=j+50) 
		 {
		    plinkos.push(new Plinko(j,75));
		 }
	 
		 for (var j = 50; j <=width; j=j+50) 
		 {
		   plinkos.push(new Plinko(j,175));
		 }
	 
		  for (var j = 75; j <=width; j=j+50) 
		 {
		   plinkos.push(new Plinko(j,275));
		}
	 
		  for (var j = 50; j <=width; j=j+50) 
		 {   
			 plinkos.push(new Plinko(j,375));
		 }
	 
		 
	 
		 

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  
  ground.display();
  division1.display();
  division2.display();
  division3.display();
  division4.display();
  division5.display();
 
  for (var i = 0; i < plinkos.length; i++) {
	plinkos[i].display();
  }

  if(frameCount%60===0){
	particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

  for (var j = 0; j < particles.length; j++) {
	particles[j].display();
  }

    drawSprites();
 
}



